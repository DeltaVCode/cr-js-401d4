import React from 'react';

import LoginProvider from './components/auth/provider';
import Login from './components/auth/login';

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <header>
          <Login />
        </header>
      </LoginProvider>
    );
  }
}

export default App;
