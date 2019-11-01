import './resty.scss';

import React, { useState } from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

import Form from './form';
import makeRequest from './api';

function RESTy() {
  let [response, setResponse] = useState({});

  let callAPI = (method, url, body) => {
    makeRequest(method, url, body)
      .then(setResponse);
  };

  return (
    <main>
      <section className="deck">
        <Form
          onRequest={callAPI}
          />
        <div id="json">
          <ReactJson
            name="Headers"
            enableClipboard={false}
            collapsed={true}
            src={response.header}
          />
          <ReactJson
            name="Response"
            enableClipboard={false}
            collapsed={false}
            src={response.body}
          />
        </div>
      </section>
    </main>
  );
}

export default RESTy;
