'use strict';

const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  capabilities: { type: Array, required: true },
});

/*
{
  role: 'admin',
  capabilities: ['create','read','update','delete'],
}
*/

module.exports = mongoose.model('roles', roleSchema);
