import React from 'react';

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
      </>
    );
  }
}

export default Message;
