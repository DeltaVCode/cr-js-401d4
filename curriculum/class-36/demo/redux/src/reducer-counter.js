import React from 'react';
import { useReducer, useEffect } from 'react';

const initialState = { count: 0 };
// state here is the current count
function reducer(state, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
      // or throw Error(`${action.type} not found`)
  }
}

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
