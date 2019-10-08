'use strict';

const net = require('net');
const uuid = require('uuid');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${uuid()}`;
  socketPool[id] = socket;
  socket.on('data', dispatchEvent);
  socket.on('close', () => {
    delete socketPool[id];
  });
});

let dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  for (let socket in socketPool) {
    socketPool[socket].write(`${text}\r\n`);
  }
};
