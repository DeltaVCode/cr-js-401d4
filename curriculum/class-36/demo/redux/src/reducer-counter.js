import React from 'react';
import { useReducer, useEffect } from 'react';

import { initialState, reducer } from './store/counter-reducer';

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function increment() {
    dispatch({ type: 'increment' });
  }

  useEffect(() => {
    console.log('Updating title');
    document.title = `useReducer! ${state.count}`;
  }, [state.count]);


  return (
    <div>
      <h2><code>useReducer</code> Count: {state.count}</h2>
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
