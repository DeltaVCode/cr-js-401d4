import React from 'react';
import { useState } from 'react';

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

  return (
    <div>
      <h2><code>setState</code> Count: {count}</h2>
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
