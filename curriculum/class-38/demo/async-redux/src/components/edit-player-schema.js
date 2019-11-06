import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from 'react-jsonschema-form';
import schema from '../schema.json';
import { actions } from '../store/players-reducer';

const playerUiSchema = {
  bats: { 'ui:widget': 'radio' },
  throws: { 'ui:widget': 'radio' },
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
}

const EditPlayerSchema = (props) => {
  let id = props.match.params.id;
  let player = props.player; // props.players[props.match.params.id];
  if (!player) {
    return (
      <strong>Player {id} not found!</strong>
    );
  }

  function handleSubmit(submitData) {
    // console.log(submitData);
    let {
      _id, __v,
      ...record
    } = submitData.formData;
    props.savePlayer(id, record);

    props.history.push('/');
  }

  return (
    <>
      <h2>Editing {player.name}</h2>
      <Form
        schema={schema}
        uiSchema={playerUiSchema}
        formData={player}
        onSubmit={handleSubmit}
      />
      <p><Link to="/">Go Home</Link></p>
    </>
  );
};

export default connect(
  (state, props) => ({
    // players: state.players, // We don't need all the players, just one

    player: state.players.find(player => player._id === props.match.params.id),
  }),
  dispatch => ({
    savePlayer: (id, record) => dispatch(actions.remotePut(id, record)),
  })
)(EditPlayerSchema);
