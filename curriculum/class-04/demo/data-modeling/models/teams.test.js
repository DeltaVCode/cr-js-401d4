const Teams = require('./teams');

describe('Teams Model', () => {
  it('can create a team', () => {
    // Arrange
    let teams = new Teams();
    let newTeam = { name: 'Cyclones' };

    // Act
    let record = teams.create(newTeam);

    // Assert
    expect(record).not.toBe(newTeam);
    expect(record).toHaveProperty('name', 'Cyclones');
    expect(record).toHaveProperty('id', 101);

    let records = teams.getAll();
    expect(records).toEqual([
      record
    ]);

    let newRecord = teams.get(record.id);
    expect(newRecord).toEqual(record);
  });

  it('can update existing team', () => {
    // Arrange
    let teams = new Teams();
    expect(teams.getAll()).toEqual([]);

    let cyclones = teams.create({ name: 'Cyclones', wins: 1, losses: 0 });

    // Act
    let record = teams.update(cyclones.id, { wins: 1, losses: 1 });

    // Assert
    expect(record).toHaveProperty('id', cyclones.id);
    expect(record).toHaveProperty('name', 'Cyclones');
    expect(record).toHaveProperty('wins', 1);
    expect(record).toHaveProperty('losses', 1);

    let newRecord = teams.get(record.id);
    expect(newRecord).toEqual(record);
  });

  // TODO: delete
});
