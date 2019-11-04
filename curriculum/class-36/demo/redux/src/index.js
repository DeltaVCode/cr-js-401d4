import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';

import { Provider } from 'react-redux';
import createStore from './store';
let store = createStore();

function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
