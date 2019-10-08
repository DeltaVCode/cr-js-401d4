const net = require('net');
const client = new net.Socket();

const PORT = process.env.PORT || 3001;

client.connect(PORT, 'localhost', () => {
  console.log(`Connected on ${PORT}`);
});

client.on('data', data => {
  console.log('LOG', data.toString());
});

client.on('close', () => {
  console.log('Connection closed');
});
