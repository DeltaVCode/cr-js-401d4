import React from 'react';
import { useState, useEffect } from 'react';

export default function HooksCounter(props) {
  // Only props are from <Route />
  // console.log(props);

  let initialCount = 0;
  let [count, setCount] = useState(initialCount);
  function increment() {
    setCount(count + 1);
  }

  let initialRandom = Math.random();
  let [random, setRandom] = useState(initialRandom);

  useEffect(() => {
    console.log('componentDidMount-ish');

    // Returning a function inside useEffect callback
    // gives the function to call before unmount
    return () => {
      console.log('componentWillUnmount');
    };
  }, []); // Empty dependencies = run once

  // Called on every render
  useEffect(() => {
    console.log('componentDidUpdate-ish');
  });

  useEffect(() => {
    console.log('Updating title');
    document.title = `useState! ${count}`;
  }, [count]);

  return (
    <div>
      <h2><code>useState</code> Count: {count}</h2>
      <button onClick={increment}>
        Update Counter
      </button>
      <h3>Random {random}</h3>
      <button onClick={() => setRandom(Math.floor(Math.random() * 100))}>
        Generate Random Number
      </button>
    </div>
  );
}
