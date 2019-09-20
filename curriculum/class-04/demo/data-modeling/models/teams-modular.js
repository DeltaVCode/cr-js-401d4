const DataModel = require('../model');

const schema = {
  name: { type: 'string', required: true },
  wins: { type: 'number' },
  losses: { type: 'number' },
};

class Teams extends DataModel {
  constructor() {
    super(schema);
  }
}

module.exports = Teams;
