'use strict';

const hub = require('./hub');
require('./logger');
require('./cache-invalidator');

console.log('App is listening!');

let nextId = 1;
function saveToDb(document) {
  let saved = { ... document, id: nextId++ };
  hub.emit('save', saved);
}

saveToDb({ name: 'Keith' });
saveToDb({ name: 'Craig' });
