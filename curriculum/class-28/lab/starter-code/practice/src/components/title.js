import React from 'react';

class Title extends React.Component {
  /* Useless constructor; not needed
  constructor(){
    super();
  }
  */

  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default Title;
