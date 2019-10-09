'use strict';

const eventHub = require('./hub');

eventHub.on('save', handleSave);
eventHub.on('delete', log('delete'));
eventHub.on('update', log('update'));
eventHub.on('cache-invalidate', log('cache-invalidate'));

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved!`);

  eventHub.emit('cache-invalidate', payload);
}

function log(eventType) {
  return payload => {
    console.log(eventType, payload);
  };
}
