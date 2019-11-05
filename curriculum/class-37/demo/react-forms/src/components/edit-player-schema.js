import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const EditPlayerSchema = (props) => {
  return (
    <form>
      Editing {props.match.params.id}
      <p><Link to="/">Go Home</Link></p>
    </form>
  );
};

export default connect(
)(EditPlayerSchema);
