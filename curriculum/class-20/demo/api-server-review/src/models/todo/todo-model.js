'use strict';

const Model = require('../mongo.js');
const schema = require('./todo-schema.js');

class Todo extends Model {
  constructor() { super(schema); }
}

module.exports = Todo;

