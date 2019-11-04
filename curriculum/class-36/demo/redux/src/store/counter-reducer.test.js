import { initialState, reducer } from './counter-reducer';
import { increment, decrement, reset, add } from './counter-reducer';

describe('Counter Reducer', () => {
  it('increments count', () => {
    // Arrange
    const state = {
      count: 2,
    };
    Object.freeze(state); // npm: deep-freeze
    let action = increment();

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

    let res = reducer(state, decrement());

    expect(res).toEqual({ count: 2 });
  });

  it('reducer returns initial state if no state/action', () => {
    let res = reducer();
    expect(res).toEqual(initialState);
  });

  it('resets count', () => {
    let state = { count: 7 };
    Object.freeze(state);

    let res = reducer(state, reset());

    expect(res).toEqual(initialState);
  })

  it('can add arbitrary value', () => {
    let state = { count: 4 };
    Object.freeze(state);

    let res = reducer(state, add(7));

    expect(res).toEqual({ count: 11 });
  })

  it('returns previous state for unknown action type', () => {
    let state = { count: 5 };
    Object.freeze(state);

    let res = reducer(state, { type: 'FOO' });

    expect(res).toBe(state);
  });
});
