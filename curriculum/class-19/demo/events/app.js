'use strict';

const hub = require('./hub');
const uuid = require('uuid');

require('./logger');
require('./socket-io-logger');
require('./cache-invalidator');

console.log('App is listening!');

const { saveToDb } = require('./db');

// Don't save until we're probably connected
setInterval(() => {
  saveToDb({ name: uuid() });
}, 500);
