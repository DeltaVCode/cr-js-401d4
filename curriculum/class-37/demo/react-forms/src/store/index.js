import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
});

export default () => createStore(reducers, composeWithDevTools());
