'use strict';

const Model = require('../mongo.js');
const schema = require('./todo-schema.js');

/**
 * Class representing a To Do Item.
 * @extends Model
 */
class Todo extends Model {
  constructor() { super(schema); }
}

module.exports = Todo;

