import React, {useState, useEffect} from 'react';
import useForm from './hooks/form';
import useSocket from './hooks/socket';
import useQ from './hooks/q';

const App = (props) => {
  const [socketPublish, socketSubscribe] = useSocket();
  const [qPublish, qSubscribe] = useQ();

  const [values, handleChange, handleSubmit] = useForm(values => {
    qPublish('deeds', 'work', values);
    socketPublish('words', values);
  });

  const [queueMessage, setQueueMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});

  useEffect( () => {
    qSubscribe('work', setQueueMessage);
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

