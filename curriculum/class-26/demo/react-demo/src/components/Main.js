import React from 'react';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    // Initialize my app state
    this.state = {
      count: 0,
      words: 'DeltaV does React!',
    };
  }

  handleWords = e => {
    let words = e.target.value;
    // Essentially this....
    // this.state.words = words
    // BUT WE NEVER CHANGE STATE WITHOUT setState

    this.setState({
      words: words,
    });
  }
  
  handleClick = e => {
    e.preventDefault();

    // WE NEVER CHANGE STATE DIRECTLY:
    // this.state.count++;

    // This is _fine_, but it can be buggy....
    // let count = this.state.count + 1;
    // this.setState({ count });

    // This is preferred, as you'll never "lose" a count
    this.setState(state => {
      let words = state.words.split('').reverse().join('');

      return {
        words,
        count: state.count + 1,
      };
    });
  }

  render() {
    console.log('RENDER! State:', this.state);
    return (
      <main>
        <h3>{this.state.words}</h3>
        <h4>Count: {this.state.count}</h4>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick}>Click Me</button>
      </main>
    );
  }
}

export default Main;
