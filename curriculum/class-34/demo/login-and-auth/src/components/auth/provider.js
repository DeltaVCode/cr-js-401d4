import React from 'react';
import jwt from 'jsonwebtoken';

import LoginContext from './context';

const API = process.env.REACT_APP_API;

export default class LoginProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      user: null,
      login: this.login,
      logout: this.logout,
    };
  }

  login = (username, password) => {
    console.log('Login!', username);

    fetch(`${API}/signin`, {
      mode: 'cors',
      method: 'post',
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
      })
    })
      .then(response => response.text())
      .then(token => this.validateToken(token))
      .catch(console.error);
  }

  validateToken = token => {
    try {
      let user = jwt.decode(token);
      console.log(user);
      this.setLoginState(token, user);
    }
    catch(e) {
      this.logout();
      console.error(e);
    }
  }

  logout = () => {
    this.setLoginState(null, null);
  }

  setLoginState = (token, user) => {
    this.setState({ token, user });
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
