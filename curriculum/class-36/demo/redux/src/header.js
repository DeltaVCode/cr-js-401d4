import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  let { name } = props;

  return (
    <header>
      Hi, my name is {name}.
    </header>
  )
}

export default connect(
  state => ({ name: state.name })
)(Header);
