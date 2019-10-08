'use strict';

const net = require('net');
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;
const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const socketPool = {};

server.on('connection', socket => {
  const id = uuid();
  socket.id = id;
  socketPool[id] = socket;

  console.log(`${id} connected! ${Object.keys(socketPool).length} total.`);

  socket.on('data', dataHandler);
  socket.on('error', err => {
    console.error(err);
  });
  socket.on('close', () => {
    console.log(`Closing time for ${id}! ${Object.keys(socketPool).length} left.`);
    delete socketPool[id];
  });
});

function dataHandler(buffer) {
  console.log(this.id, buffer.toString());
}
