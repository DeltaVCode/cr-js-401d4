'use strict';

const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Note: not their actual password!!!!!
  // TODO: date created?
  email: { type: String },
  role: { type: String, required: true, default: 'user', enum: ['user', 'editor', 'admin']},
});

// User.authenticateBasic({ username, password })
users.statics.authenticateBasic = function(auth) {
  let query = { username: auth.username };
  return this.findOne(query)
}

module.exports = mongoose.model('users', users);
