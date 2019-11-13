import React, { useState }from 'react';
import faker from 'faker';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  let [words, setWords] = useState('Initial words!');

  return (
    <Layout>
      <SEO title="These are my words!" />
      <h1>Words go here: {words}</h1>
      <button onClick={() => setWords(faker.hacker.noun())}>
        Hacker Name
      </button>
    </Layout>
  );
};

export default IndexPage;
