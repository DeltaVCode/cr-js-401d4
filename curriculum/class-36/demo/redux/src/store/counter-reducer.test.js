import { initialState, reducer } from './counter-reducer';
import { INCREMENT, DECREMENT, RESET } from './counter-reducer';

describe('Counter Reducer', () => {
  it('increments count', () => {
    // Arrange
    const state = {
      count: 2,
    };
    Object.freeze(state); // npm: deep-freeze
    let action = {
      type: INCREMENT,
    };

    // Act
    let nextState = reducer(state, action);

    // Assert
    expect(nextState).toEqual({
      count: 3,
    });

    expect(nextState).not.toBe(state);
  });

  it('decrement count', () => {
    let state = { count: 3 }
    Object.freeze(state);

    let res = reducer(state, { type: DECREMENT });

    expect(res).toEqual({ count: 2 });
  });

  it('reducer returns initial state if no state/action', () => {
    let res = reducer();
    expect(res).toEqual(initialState);
  });

  it('resets count', () => {
    let state = { count: 7 };
    Object.freeze(state);

    let res = reducer(state, { type: RESET });

    expect(res).toEqual(initialState);
  })
});
