import React from 'react';

import LoginProvider from './components/auth/provider';
import Login from './components/auth/login';
import Auth from './components/auth/auth';

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <header>
          <Login />
        </header>
        <ul>
          <li>Anyone can see this</li>
          <Auth>
            <li>Authed users can see this</li>
          </Auth>
          <Auth capability="read">
            <li>Readers can see this</li>
          </Auth>
          <Auth capability="create">
            <li>Creators can see this</li>
          </Auth>
          <Auth capability="update">
            <li>Updaters can see this</li>
          </Auth>
          <Auth capability="delete">
            <li>Deleters can see this</li>
          </Auth>
        </ul>
      </LoginProvider>
    );
  }
}

export default App;
