'use strict';

const hub = require('./hub');
require('./logger');
require('./cache-invalidator');

console.log('App is listening!');

const { saveToDb } = require('./db');

saveToDb({ name: 'Keith' });
saveToDb({ name: 'Craig' });
