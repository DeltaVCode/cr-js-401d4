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
  let [messages, setMessages] = useState([]);

  let [send] = usePostMessage(msg => setMessages([msg, ...messages]));

  return (
    <>
      <h1>Messages:</h1>
      <button onClick={() => send('Hello, world!')}>Say Hello</button>

      <SendMessage message='goodbye' />
      <SendMessage message='hooks are confusing' />

      <ul>
        {messages.map(message => <li>{message}</li>)}
      </ul>
    </>
  );
}

export default Comms;
