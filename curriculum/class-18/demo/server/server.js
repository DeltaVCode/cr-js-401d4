'use strict';

const socketIO = require('socket.io'); // server factory
const uuid = require('uuid');

const PORT = process.env.PORT || 3000; // HTTP
const server = socketIO(PORT);
console.log(`Listening on port ${PORT}`);

server.on('connection', socket => {
  console.log(`connected!`, socket.id);

  socket.on('send-chat', data => {
    server.emit('chat', data);
  });
});

setInterval(() => {
  let payload = uuid();
  console.log('chat', payload);
  server.emit('chat', payload);
}, 2500);


const dbServer = server.of('/database');
dbServer.on('connection', socket => {
  console.log('DB connection', socket.id);

  socket.on('save', payload => {
    console.log('received save', payload);
  });
});
