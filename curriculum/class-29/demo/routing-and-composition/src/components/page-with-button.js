import React from 'react';

export default props => {
  console.log(props);

  const alertMe = () => {
    alert(props.match.params.text || 'hi');
    props.history.push('/');
  }

  return (
    <button onClick={alertMe}>Click Me</button>
  );
}