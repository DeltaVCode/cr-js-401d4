import React from 'react';

export default class Counter extends React.Component {
  // https://blog.g2i.co/react-class-components-with-es6-and-class-fields-927b2b59f94e
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  componentDidMount() {
    console.log('componentDidMount');
    document.title = `Class! ${this.state.count}`;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    document.title = `Class! ${this.state.count}`;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h2>Class Based Count: {this.state.count}</h2>
        <button onClick={this.increment}>
          Update Counter
        </button>
      </div>
    );
  }
}