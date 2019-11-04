
export const initialState = { count: 0 };
// state here is the current count
export function reducer(state, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
      // or throw Error(`${action.type} not found`)
  }
}
