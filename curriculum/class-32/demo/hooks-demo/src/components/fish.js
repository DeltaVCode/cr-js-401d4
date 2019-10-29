import React from 'react';
import useFishHook from '../hooks/fish';

function Fish(props) {
  const isFish = useFishHook(props.fish);

  return (
    <h2>Is {props.fish} a fish? {isFish ? 'Yes!' : 'No!'}</h2>
  );
}

export default Fish;
