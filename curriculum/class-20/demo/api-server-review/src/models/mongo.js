'use strict';

const Q = require('@nmq/q/client');

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject)
      .then(res => {
        Q.publish('database', 'get', res);
        return res;
      });
  }

  create(record) {
    console.log('r',record);
    let newRecord = new this.schema(record);
    console.log('n', newRecord);
    return newRecord.save()
      .then(res => {
        Q.publish('database', 'create', res);
        return res;
      });
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true })
      .then(res => {
        Q.publish('database', 'update', res);
        return res;
      });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id)
      .then(res => {
        Q.publish('database', 'delete', { id: _id });
        return res;
      });
  }

}

module.exports = Model;
