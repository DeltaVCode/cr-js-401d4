'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const todo = mongoose.Schema({
  text: { type:String, required:true },
  category: {type: String},
  assignee: { type:String, required:true },
  difficulty: {type:Number, required:true, default: 3},
  complete: {type:Boolean, required:true, default:false},
});

module.exports = mongoose.model('todo', todo);
