import React from 'react';

import LoginContext from './context';

export default class AuthButton extends React.Component {
  static contextType = LoginContext;

  render() {
    let { user } = this.context;

    let {
      children,
      capability,
      disabledMessage,
      ...otherProps
    } = this.props;
    console.log(otherProps);

    if (!user ||
      !(user.capabilities && user.capabilities.includes(capability)))
      return (
        <button {...otherProps} disabled title={disabledMessage}>
          {children}
        </button>
      );

    return (
      <button {...otherProps}>
        {children}
      </button>
    );
  }
}
