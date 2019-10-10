const eventHub = require('./hub');

const net = require('net');
const client = new net.Socket();

const LOGGER_PORT = process.env.LOGGER_PORT || 3001;
const LOGGER_HOST = process.env.LOGGER_HOST || 'localhost';

client.connect(LOGGER_PORT, LOGGER_HOST, initializeLogger);
client.on('error', () => {
  console.warn('Connection closed!');
});

function initializeLogger() {
  console.log('Network logger connected!');

  eventHub.on('save', log('save'));

  function log(eventType) {
    return payload => {
      let json = JSON.stringify({
        eventType,
        payload,
      });
      client.write(`${json}\r\n`);
    };
  }
}
