import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log('Form props', props);
  }

  handleSubmit = async e => {
    e.preventDefault();

    let data = await superagent.get('https://swapi.co/api/people');
    console.log(data);
    let { count, results } = data.body;

    if (typeof this.props.onDataReceived === 'function') {
      this.props.onDataReceived(count, results);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form!</h1>
        {this.props.children}
        <label>
          <input type="checkbox" required />
          Check this.
        </label>
        <button style={this.props.buttonStyle}>
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default Form;
