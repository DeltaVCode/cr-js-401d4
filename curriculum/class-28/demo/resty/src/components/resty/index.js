import './resty.scss';

import React from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

import Form from './form';

class RESTy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      header: {},
      body: {},
      history: {},
      headersVisible: false,
    };
  }

  callAPI = url => {
    superagent('get', url)
      .set('Content-Type', 'application/json')
      .send(this.state.requestBody)
      .then(response => {
        let header = response.header;
        let body = response.body;
        this.setState({ header, body });
      })
      .catch(e => {
        let body = { error: e.message };
        let header = {};
        this.setState({ header, body });
      });
  };

  render() {
    return (
      <main>
        <section className="deck">
          <Form
            onRequest={this.callAPI}
            />
          <div id="json">
            <ReactJson
              name="Headers"
              enableClipboard={false}
              collapsed={true}
              src={this.state.header}
            />
            <ReactJson
              name="Response"
              enableClipboard={false}
              collapsed={false}
              src={this.state.body}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default RESTy;
