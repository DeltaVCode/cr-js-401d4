import React, { useState } from 'react';
import usePostMessage from '../hooks/postmessage';

function SendMessage(props) {
  let { message } = props;

  let [send] = usePostMessage();

  return (
    <button onClick={() => send(message)}>Say '{message}'</button>
  )
}

function Comms() {
  let [message, setMessage] = useState();

  let [send] = usePostMessage(msg => setMessage(msg));

  return (
    <>
      <h1>Message: {message}</h1>
      <button onClick={() => send('Hello, world!')}>Say Hello</button>

      <SendMessage message='goodbye' />
      <SendMessage message='hooks are confusing' />
    </>
  );
}

export default Comms;
