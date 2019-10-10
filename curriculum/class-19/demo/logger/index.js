
const Q = require('@nmq/q/client');

const db = new Q('database');
const net = new Q('network');

db.subscribe('update', payload => {
  console.log('update happened!', payload);
});

db.subscribe('delete', payload => {
  console.log('delete happened!', payload);
});

db.subscribe('create', payload => {
  console.log('create happened!', payload);
});

net.subscribe('attack', payload => {
  console.warn('WE ARE UNDER ATTACK', payload);
});
