'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

categories.virtual('tasks', {
  ref: 'todo',
  localField: 'name',
  foreignField: 'category',
  justOne:false,
});

categories.pre('find', function() {
  try {
    this.populate('tasks');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('categories', categories);
