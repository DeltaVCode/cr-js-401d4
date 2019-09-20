
const schema = {
  name: { type: 'string', required: true },
  wins: { type: 'number' },
  losses: { type: 'number' },
};

class Teams {
  constructor() {
    this.records = [];
    this.nextId = 101;
  }

  // C
  create(team) {
    // TODO: use validator to validate the new record with the schema

    let record = {
      ...team,
      id: this.nextId++, // common to use uuid package
    };
    this.records.push(record);
    return record;
  }

  // R
  getAll() {
    return this.records;
  }

  get(id) {
    return this.records.find(r => r.id === id)
  }

  // U
  update(id, newRecord) {
    let existingRecord = this.get(id);
    for (let prop in newRecord) {
      existingRecord[prop] = newRecord[prop];
    }
    return existingRecord;
  }

  // D
}

module.exports = Teams;
