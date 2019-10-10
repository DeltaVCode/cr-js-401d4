const socketIoClient = require('socket.io-client');

const URL = process.env.URL || 'http://localhost:3000';

const client = socketIoClient.connect(URL);
console.log(`Connected on ${URL}`);

client.on('chat', data => {
  console.log('CHAT', data);
});
