import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

let list = ['Keith', 'Craig', 'Jess'];

const Home = () => (
  <>
    <Head title="Home" />
    <Nav />

    <div>
        Home Page!
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
    </div>
  </>

);

export default Home;
