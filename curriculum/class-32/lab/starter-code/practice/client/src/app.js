import React, {useState, useEffect} from 'react';
import useForm from './hooks/form';
import useSocket from './hooks/socket';

import Q from '@nmq/q/client';

// Connect outside of the render cycle ...
const queue = new Q('deeds');

const App = (props) => {
  const [socketPublish, socketSubscribe] = useSocket();

  const [values, handleChange, handleSubmit] = useForm(values => {
    Q.publish('deeds', 'work', values);
    socketPublish('words', values);
  });

  const [queueMessage, setQueueMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});

  useEffect( () => {
    queue.subscribe('work', message => {
      setQueueMessage(message);
    });

    socketSubscribe('incoming', setSocketMessage);
  }, []);


  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
};

export default App;

