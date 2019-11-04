let initialName = 'Keith';

export function reducer(state = initialName, action = {}) {
  switch (action.type) {
    case 'NAME_SET':
      return action.payload;
    case 'RESET':
      return initialName;
    default:
      return state;
  }
};
