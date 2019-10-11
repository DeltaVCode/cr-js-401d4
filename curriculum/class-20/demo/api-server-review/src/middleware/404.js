'use strict';

const hub = require('../hub');

module.exports = (req,res,next) => {
  hub.emit('api', {
    type: 'not-found',
    payload: {
      path: req.path,
      method: req.method,
    }
  });

  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};
