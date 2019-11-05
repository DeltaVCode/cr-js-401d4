import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PlayersList = (props) => (
  <table>
    {props.players.map((player, idx) => (
      <tr key={idx}>
        <th>{player.name}</th>
        <td><Link to={`/players/${idx}/edit`}>Edit</Link></td>
      </tr>
    ))}
  </table>
);

export default connect(
  state => ({
    players: state.players,
  })
)(PlayersList);