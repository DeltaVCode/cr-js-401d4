import React from 'react';

import Form from './form.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: undefined,
      people: [],
    };
  }

  handleFormData = (count, people) => {
    console.log('handleFormData', people);
    this.setState({ count, people });

    setTimeout(() => {
      let sorted = [...people].sort((a,b) => a.height - b.height);
      console.log(people);
      this.setState({
        people: sorted,
      });
    }, 2000);
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
          {
            this.state.people
              .map((person, i) =>
                <li key={person.url /* or i sometimes works */}>
                  <a href={person.url}>
                    {person.name}
                  </a>
                </li>
              )
          }
        </ul>
      </>
    );
  }
}

export default App;
