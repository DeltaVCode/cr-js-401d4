export function reducer(state = null, action = {}) {
  switch (action.type) {
    case 'NAME_SET':
      return action.payload;
    case 'RESET':
      return null;
    default:
      return state;
  }
};
