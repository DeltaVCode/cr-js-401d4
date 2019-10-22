import React from 'react';
import './thing.scss';

class Thing extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };

    // Have to do this if handleClick defined as a method
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // Again, avoid updating state using this.state
    // this.setState({ flag: !this.state.flag });

    this.setState(state => ({ flag: !state.flag }) );
  }

  render() {
    return (
      <section className="thing">
        <span className="flag">{this.state.flag ? 'True' : 'False'}</span>
        <button onClick={this.handleClick}>Toggle</button>
      </section>
    );
  }
}

export default Thing;
