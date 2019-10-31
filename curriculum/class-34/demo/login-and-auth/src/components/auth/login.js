import React from 'react';

import LoginContext from './context';

export default class Login extends React.Component {
  static contextType = LoginContext;

  handleSubmit = e => {
    e.preventDefault();

    let { username, password } = e.target;
    this.context.login(username.value, password.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="username"
          name="username" />
        <input placeholder="password"
          name="password" />
        <button>Login</button>
      </form>
    )
  }
}
