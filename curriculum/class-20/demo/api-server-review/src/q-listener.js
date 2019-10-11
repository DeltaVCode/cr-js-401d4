const hub = require('./hub');
const Q = require('@nmq/q/client');

hub.on('api', ({ type, payload }) => {
  Q.publish('api', type, payload);
});
