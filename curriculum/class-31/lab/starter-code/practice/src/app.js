import React from 'react';
import { useEffect, useState, useReducer } from 'react';

const initialState = { words: '' };
function reducer(state, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'enter':
      return {
        words: action.payload.toUpperCase(),
      };
    case 'reset':
      return initialState;
    default:
      throw action.type;
  }
}

export default function App() {
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = state.words;
  }, [state.words]);

  function _handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'enter',
      payload: input,
    });
  }

  return (
    <>
      <div>My App</div>
      <div>Words: {state.words}</div>
      <form onSubmit={_handleSubmit}>
      </form>
    </>
  );
}
