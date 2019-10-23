import React from 'react';

import Form from './form.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: undefined,
      results: [],
    };
  }

  handleFormData = (count, results) => {
    console.log('handleFormData', results);
    this.setState({ count, results });
  }

  render() {
    return (
      <> {/* React.Fragment */}
        <Form
          onDataReceived={this.handleFormData}
          buttonText="Use the Force"
          buttonCount={4}
          buttonCountString="4"
          formEnabled
          buttonStyle={{ color: 'blue' }}
          >
            <strong>Star Wars API!</strong>
            <p>This is a lot of fun.</p>
        </Form>
        <ul>
        </ul>
      </>
    );
  }
}

export default App;
