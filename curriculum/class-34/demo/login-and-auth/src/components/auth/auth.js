import React from 'react';

import LoginContext from './context';

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let { user } = this.context;
    let { capability } = this.props;

    if (!user)
      return null;

    if (capability &&
      !(user.capabilities && user.capabilities.includes(capability)))
      return null;

    return this.props.children;
  }
}

export default Auth;
