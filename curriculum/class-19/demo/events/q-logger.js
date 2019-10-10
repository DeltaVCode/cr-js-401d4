const Q = require('@nmq/q/client');
const eventHub = require('./hub');

initializeLogger();

function initializeLogger() {
  console.log('Q connected!');

  eventHub.on('save', log('update'));
  eventHub.on('create', log('create'));
  eventHub.on('get', log('read'));
  eventHub.on('delete', log('delete'));

  function log(eventType) {
    return payload => {
      Q.publish('database', eventType, payload);
    };
  }
}
