import React from 'react';

class Form extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
  }

  handleChange = e => {
    let { value } = e.target;
    this.props.do(value); // App.sayIt
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
      </form>
    )
  }

}

export default Form;
