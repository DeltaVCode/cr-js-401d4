import React from 'react';
import { connect } from 'react-redux';
import { add, increment, decrement, reset } from './store/counter-reducer';

function ReduxCounter(props) {
  console.log(props);
  const { count, increment, decrement, reset, add7 } = props;

  return (
    <div>
      <h2>Redux Count: {count}</h2>
      <button onClick={add7}>
        +7
      </button>
      <button onClick={increment}>
        Increment Counter
      </button>
      <button onClick={decrement}>
        Decrement Counter
      </button>
      <button onClick={reset}>
        Reset Counter
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    polarity: state.counter.count > 0 ? 'positive' : 'zero'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    add7: () => dispatch(add(7)),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
