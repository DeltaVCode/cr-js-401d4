import React from 'react';
import { connect } from 'react-redux';

const PlayersList = (props) => (
  <ul>
    {props.players.map((player, idx) => (
      <li key={idx}>
        {player.name}
      </li>
    ))}
  </ul>
);

export default connect(
  state => ({
    players: state.players,
  })
)(PlayersList);
