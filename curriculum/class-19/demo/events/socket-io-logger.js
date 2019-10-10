'use strict';

const eventHub = require('./hub');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/database');

initializeLogger();

function initializeLogger() {
  console.log('Socket logger connected!');

  eventHub.on('save', log('save'));
  eventHub.on('create', log('create'));
  eventHub.on('get', log('get'));
  eventHub.on('delete', log('delete'));

  function log(eventType) {
    return payload => {
      socket.emit(eventType, payload);
    };
  }
}
