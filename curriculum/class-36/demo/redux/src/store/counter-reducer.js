export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const RESET = 'reset';

export const initialState = { count: 0 };
// state here is the current count

export function reducer(state = initialState, action = {}) {
  console.log('reducer', state, action);
  switch(action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return state;
      // or throw Error(`${action.type} not found`)
  }
}
