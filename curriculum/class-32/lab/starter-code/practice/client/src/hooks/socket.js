import io from 'socket.io-client';

let socket = io.connect('http://localhost:3000');

export default function useSocket() {
  function publish(event, payload) {
    if (!socket) throw 'Could not publish';
    socket.emit(event, payload);
  }

  function subscribe(event, callback) {
    if (!socket) throw 'Could not subscribe';
    socket.on(event, callback);
  }

  return [
    publish,
    subscribe,
  ];
}