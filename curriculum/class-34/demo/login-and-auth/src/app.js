import React from 'react';

import LoginProvider from './components/auth/provider';
import Login from './components/auth/login';
import Auth from './components/auth/auth';
import Button from './components/auth/auth-button';

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
          <Auth capability="update">
            <li>
              <Button
                onClick={() => console.log('Delete!')}
                style={{ border: '5px solid green' }}
                capability="delete"
                disabledTitle="Delete permission is required"
                >
                Delete
              </Button>
            </li>
          </Auth>
        </ul>
      </LoginProvider>
    );
  }
}

export default App;
