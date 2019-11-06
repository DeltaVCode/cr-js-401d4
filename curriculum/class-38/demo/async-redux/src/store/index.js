import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import thunk from './middleware/thunk';

import { reducer as form } from 'redux-form';

import players from './players-reducer';

let reducers = combineReducers({
  players,

  form,
});

export default () => createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));
