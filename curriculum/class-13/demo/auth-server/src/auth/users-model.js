'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required:true, default:'user', enum:['admin','editor','user'] },
});

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
users.methods.generateToken = function() {
  let tokenData = {
    id:this._id,
    capabilities: (this.acl && this.acl.capabilities) || [],
  };
  return jwt.sign(tokenData, this.generateSecret());
};

users.methods.generateSecret = function() {
  return (process.env.SECRET || 'changeit') + this.password;
}

module.exports = mongoose.model('users', users);
