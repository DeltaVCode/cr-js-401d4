const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin','editor','user'],
  },
});

module.exports = mongoose.model('users', users);
