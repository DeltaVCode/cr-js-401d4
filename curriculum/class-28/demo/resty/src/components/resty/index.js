import './resty.scss';

import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import Form from './form';
import makeRequest from './api';

function History(props) {
  return (
    <ul>
      {props.history.map(h => (
        <li>{h.method.toUpperCase()} {h.url}</li>
      ))}
    </ul>
  )
}

function RESTy() {
  let [response, setResponse] = useState({});
  let [history, setHistory] = useState([]);

  let callAPI = (method, url, body) => {
    setHistory(h => [
      {method, url, body},
      ...h,
    ]);

    makeRequest(method, url, body)
      .then(setResponse);
  };

  return (
    <main>
      <aside>
        <History history={history} />
      </aside>
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
