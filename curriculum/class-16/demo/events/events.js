'use strict';

// Constructor for an EE hub
const EventEmitter = require('events');

const eventHub = new EventEmitter();

eventHub.emit('ignored', 'no one will see this!');

eventHub.on('ignored', (message, number, ...rest) => console.log('no longer ignored!', message, number, rest));
eventHub.emit('ignored', 'we should see this', 2, 'a', 'b', 'c');

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

eventHub.emit('save', { id: 1, name: 'Keith' });
