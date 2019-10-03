'use strict';

// Constructor for our Mongoose Player model
const Player = require('./players-schema.js');

// Repository
class Players {
  get(id) {
    if (id) {
      return Player.findOne({ _id: id });
    }
    else {
      return Player.find({ /* name: 'Keith' */ });
    }
  }

  create(obj) {
    let newRecord = new Player(obj);
    return newRecord.save(); // Return Promise to save eventually
  }

  update(id, changes) {
    return Player.findByIdAndUpdate(id, changes, { new: true });
  }
}

// We are exporting a repository to access all Players
module.exports = Players;
