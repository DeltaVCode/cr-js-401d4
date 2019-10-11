'use strict';

const Q = require('@nmq/q/client');

module.exports = (err, req, res, next) => {
  Q.publish('api', 'error', err);
  let error = { error: err };
  res.status(500).json(error).end();
};
