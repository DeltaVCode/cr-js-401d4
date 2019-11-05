import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

function Main() {
  return (
    <App />
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
