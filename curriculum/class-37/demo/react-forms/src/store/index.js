import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as form } from 'redux-form';

import players from './players-reducer';

let reducers = combineReducers({
  players,

  form,
});

export default () => createStore(reducers, composeWithDevTools());
