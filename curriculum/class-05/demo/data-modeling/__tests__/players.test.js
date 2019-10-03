const Players = require('../models/players-model.js');
const players = new Players(); // Repository

require('./supergoose.js');

describe('Players Model', () => {
  it('can create() a Player', async () => {
    // Arrange
    let playerObj = {
      name: 'Keith',
      bats: 'R',
      throws: 'R',
      position: 'CF',
      team: 'Cyclones',
    };

    // Act
    let record = await players.create(playerObj);

    // Assert
    expect(record).toHaveProperty('_id');
    expect(record).toHaveProperty('name', 'Keith');

    let saved = await players.get(record._id);
    expect(saved).toHaveProperty('_id', record._id);
    expect(saved).toHaveProperty('name', 'Keith');
  });

  it('can update() existing Player', async () => {
    // Arrange
    let playerObj = {
      name: 'Keith',
      bats: 'R',
      throws: 'R',
      position: 'CF',
      team: 'Cyclones',
    };

    let record = await players.create(playerObj);

    // Act
    let updatedPlayer = await players.update(record._id, { position: 'LF' });

    expect(updatedPlayer).not.toBe(record);
    expect(updatedPlayer).toHaveProperty('_id', record._id);
    expect(updatedPlayer).toHaveProperty('name', 'Keith');

    let saved = await players.get(record._id);
    expect(saved).toHaveProperty('_id', record._id);
    expect(saved).toHaveProperty('name', 'Keith');
    expect(saved).toHaveProperty('position', 'LF');

    // Only passes if update with { new: true }
    expect(updatedPlayer).toHaveProperty('position', 'LF');
  });
});
