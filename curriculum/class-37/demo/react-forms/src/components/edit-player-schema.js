import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const EditPlayerSchema = (props) => {
  let player = props.player; // props.players[props.match.params.id];
  if (!player) {
    return (
      <strong>Player {props.match.params.id} not found!</strong>
    );
  }

  return (
    <form>
      <h2>Editing {player.name}</h2>
      <p><Link to="/">Go Home</Link></p>
    </form>
  );
};

export default connect(
  (state, props) => ({
    // players: state.players, // We don't need all the players, just one

    player: state.players[props.match.params.id],
  })
)(EditPlayerSchema);
