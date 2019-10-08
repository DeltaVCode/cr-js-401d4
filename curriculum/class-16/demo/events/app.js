'use strict';

const hub = require('./hub');
require('./logger');
require('./network-logger');
require('./cache-invalidator');

console.log('App is listening!');

const { saveToDb } = require('./db');

// Don't save until we're probably connected
setTimeout(() => {
  saveToDb({ name: 'Keith' });
  saveToDb({ name: 'Craig' });
}, 4000);
