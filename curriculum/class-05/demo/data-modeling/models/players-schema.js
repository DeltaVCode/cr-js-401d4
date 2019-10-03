'use strict';

const mongoose = require('mongoose'); // ORM / ODM

const players = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true, uppercase: true, enum: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF'] },
  throws: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  bats: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  team: { type: String, required: true },
});

// We are exporting the model constructor for a Player
module.exports = mongoose.model('players', players);
