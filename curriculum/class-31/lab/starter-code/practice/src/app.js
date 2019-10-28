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

  return (
    <>
      <div>My App</div>
    </>
  );
}
