import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from './edit-player-redux-form';
import { actions } from '../store/players-reducer';

const EditPlayerRedux = (props) => {
  let id = parseInt(props.match.params.id, 10);
  let player = props.player; // props.players[props.match.params.id];
  if (!player) {
    return (
      <strong>Player {id} not found!</strong>
    );
  }

  function handleSubmit(formData) {
    props.savePlayer(id, formData);

    props.history.push('/');
  }

  return (
    <>
      <h2>Editing {player.name}</h2>
      <Form
        initialValues={player}
        enableReinitialize
        onSubmit={handleSubmit}
      />
      <p><Link to="/">Go Home</Link></p>
    </>
  );
};

export default connect(
  (state, props) => ({
    // players: state.players, // We don't need all the players, just one

    player: state.players[props.match.params.id],
  }),
  dispatch => ({
    savePlayer: (id, record) => dispatch(actions.put(id, record)),
  })
)(EditPlayerRedux);
