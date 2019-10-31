import React from 'react';

import LoginContext from './context';

export default class LoginProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: this.login,
    };
  }

  login = (username, password) => {
    console.log('Login!', username);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
