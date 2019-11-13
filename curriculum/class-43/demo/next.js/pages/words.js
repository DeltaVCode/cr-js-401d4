import React, { useState, useEffect } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import faker from 'faker';

let renderCount = 0;
export default function Words(props) {
  let [name, setName] = useState(props.name);
  console.log('Render count', ++renderCount);

  // useEffect(() => {
  //   props.url.replace(`/words?name=${name}`)
  // }, [name])

  return (
    <>
      <Head title="Home" />
      <Nav />

      <h2>Words go here!</h2>
      <h3>Name: {name}</h3>

      <button onClick={() => setName(faker.hacker.noun())}>
        Change Name
      </button>
    </>
  )
}

Words.getInitialProps = ({ query }) => {
  console.log('getInitialProps called');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
      name: query.name || 'Unknown',
    })
    }, 5000);
  });
}
