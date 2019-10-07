let cache = {};

const hub = require('./hub');

hub.on('cache-invalidate', (payload) => {
  cache[payload.id] = payload;
  console.log('cache', cache);
});
