'use strict';

let validator = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isObject = (input) => {
  return typeof input === 'object' && !(input instanceof Array);
};

validator.isArray = (input, valueType) => {
  return Array.isArray(input) && (valueType ? input.every( val => typeof val === valueType ) : true);
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isTruthy = (input) => {
  return !!input;
};

validator.isCorrectType = (input, field) => {
  switch(field.type) {
  case 'string': return validator.isString(input);
  case 'number': return validator.isNumber(input);
  case 'array': return validator.isArray(input, field.valueType);
  case 'object': return validator.isObject(input);
  case 'boolean': return validator.isBoolean(input);
  default: return false;
  }
};

validator.isValid = (schema,data) => {

  let valid = true;

  for (let fieldName in schema.fields) {

    let field = schema.fields[fieldName];

    // Am I required and set?
    let required = field.required
      ? validator.isTruthy(data[fieldName])
      : true;

      // Am I the right type (if we even care)
    let type = field.type
      ? validator.isCorrectType(data[fieldName], field)
      : true;

      // If anything is false ...
    if (!(required && type)) {
      valid = false;
    }

  }

  return valid;
};

module.exports = validator;

