
class DataModel {
  constructor(schema) {
    this.records = [];
    this.nextId = 101;

    this.schema = schema;
  }

  // C
  create(team) {
    // TODO: use validator to validate the new record with the schema
    // let validator = new Validator();
    // if (!validator.isValid(this.schema, team)) throw new Error('Invalid team!')

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

module.exports = DataModel;
