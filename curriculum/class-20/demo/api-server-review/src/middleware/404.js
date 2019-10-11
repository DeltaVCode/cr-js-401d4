'use strict';

module.exports = (req,res,next) => {
  Q.publish('api', 'not-found', {
    path: req.path,
    method: req.method,
  });
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};
