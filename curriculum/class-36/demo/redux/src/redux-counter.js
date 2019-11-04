import React from 'react';
import { connect } from 'react-redux';

function ReduxCounter(props) {
  console.log(props);
  const { count, increment, dispatch } = props;

  return (
    <div>
      <h2>Redux Count: {count}</h2>
      <button onClick={increment}>
        Increment Counter
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement Counter
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
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
    dispatch,
    increment: () => dispatch({ type: 'increment' }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
