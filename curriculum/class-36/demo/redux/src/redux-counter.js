import React from 'react';

export default function ReduxCounter() {
  function increment(){}
  function dispatch(){}

  return (
    <div>
      <h2>Redux Count: {0}</h2>
      <button onClick={increment}>
        Increment Counter
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement Counter
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset Counter
      </button>
    </div>
  );
}
