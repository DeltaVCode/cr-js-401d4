import './resty.scss';

import React, { useState } from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

import Form from './form';

function RESTy() {
  let [response, setResponse] = useState({});

  let callAPI = (method, url, body) => {
    superagent(method, url)
      .set('Content-Type', 'application/json')
      .send(body)
      .then(response => {
        let header = response.header;
        let body = response.body;
        setResponse({
          header, body,
        });
      })
      .catch(e => {
        let body = { error: e.message };
        let header = {};
        setResponse({
          header, body,
        });
      });
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
