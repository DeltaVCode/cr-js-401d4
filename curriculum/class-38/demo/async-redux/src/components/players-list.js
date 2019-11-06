import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../store/players-reducer';

const PlayersList = (props) => {
  let { loadPlayers } = props;
  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  return (
    <table>
      <tbody>
      {props.players.map((player, idx) => (
        <tr key={idx}>
          <th>{player.name}</th>
          <td><Link to={`/players/${idx}/edit-schema`}>Edit</Link></td>
          <td><Link to={`/players/${idx}/edit-redux`}>Edit (Redux Form)</Link></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default connect(
  state => ({
    players: state.players,
  }),
  dispatch => ({
    loadPlayers: () => dispatch(actions.loadPlayers()),
  })
)(PlayersList);
