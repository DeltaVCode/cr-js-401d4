import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from 'react-jsonschema-form';
import schema from '../schema.json';

const playerUiSchema = {
  bats: { 'ui:widget': 'radio' },
  throws: { 'ui:widget': 'radio' },
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
}

const EditPlayerSchema = (props) => {
  let player = props.player; // props.players[props.match.params.id];
  if (!player) {
    return (
      <strong>Player {props.match.params.id} not found!</strong>
    );
  }

  return (
    <>
      <h2>Editing {player.name}</h2>
      <Form
        schema={schema}
        uiSchema={playerUiSchema}
        formData={player}
      />
      <p><Link to="/">Go Home</Link></p>
    </>
  );
};

export default connect(
  (state, props) => ({
    // players: state.players, // We don't need all the players, just one

    player: state.players[props.match.params.id],
  })
)(EditPlayerSchema);
