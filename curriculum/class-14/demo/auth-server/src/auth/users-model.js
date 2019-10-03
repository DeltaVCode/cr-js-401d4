'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Make sure Roles schema is loaded first
require('./roles-model');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required:true, default:'user', enum:['admin','editor','user'] },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

users.virtual('acl', {
  ref: 'roles',
  localField: 'role',
  foreignField: 'role',
  justOne: true,
});

users.pre('findOne', function() {
  try {
    this.populate('acl');
  } catch(err) {
    console.error(err);
  }
})

users.post('save', function() {
  try {
    this.populate('acl');
    return this.execPopulate();
  } catch(err) {
    console.error(err);
  }
})

users.pre('save', async function() {
  if (this.isModified('password'))
  {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateToken = async function(token) {
  try {
    let tokenData = jwt.decode(token);
    let user = await this.findById(tokenData.id);

    if (user && jwt.verify(token, user.generateSecret())) {
      return user;
    }

    return null;
  }
  catch (error) {
    console.warn('TOKEN ERROR', error);
    return null;
  }
}

users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(console.error);
};

// Compare a plain text password against the hashed one we have saved
users.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.statics.createFromOauth = async function(email) {
  if (!email) throw 'Email is required!';

  let user = await this.findOne({ email });
  if (user) {
    console.log('OAuth: User Found', user);
    return user;
  } 

  return this.create({
    username: email,
    password: Math.random() * Math.random(),
    email,
  });
}

// Generate a JWT from the user id and a secret
users.methods.generateToken = function(type = 'user', expiresIn) {
  let tokenData = {
    id:this._id,
    capabilities: (this.acl && this.acl.capabilities) || [],
    type: type,
  };

  let options = {};

  if (expiresIn || process.env.TOKEN_EXPIRE && type !== 'key')
  {
    console.log('TOKEN_EXPIRE', process.env.TOKEN_EXPIRE);
    options.expiresIn = expiresIn || process.env.TOKEN_EXPIRE;
  }

  return jwt.sign(tokenData, this.generateSecret(), options);
};

users.methods.generateSecret = function() {
  return (process.env.SECRET || 'changeit') + this.password;
}

users.methods.can = function(capability) {
  return this.acl.capabilities.includes(capability);
}

module.exports = mongoose.model('users', users);
