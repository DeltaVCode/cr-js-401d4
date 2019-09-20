'use strict';

const mongoose = require('mongoose');
const Players = require('./models/players-model'); // Repository

const MONGODB_URI = 'mongodb://localhost/d4class05';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

let players = new Players();

let makePlayer = async () => {
    let playerObj = {
      name: 'John',
      bats: 'R',
      throws: 'R',
      position: 'RF',
      team: 'Cyclones',
    };

    let newPlayer = await players.create(playerObj);
    console.log('Player Created!', newPlayer);

    let allPlayers = await players.get();
    console.log('All Players', allPlayers);
}

makePlayer()
  .then(() => mongoose.disconnect())
