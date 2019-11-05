import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import players from './players-reducer';

let reducers = combineReducers({
  players,
});

export default () => createStore(reducers, composeWithDevTools());
