import React from 'react';

import Form from './form';
import Title from './title';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: "Words from state",
    };
  }

  render() {
    return (
      <>
        <Title text={this.props.title} />
        <h2>{this.props.text}</h2>
        <h3>{this.state.words}</h3>
        <Form do={this.props.action} />
        <h4>{this.props.input}</h4>
      </>
    );
  }
}

export default Message;
