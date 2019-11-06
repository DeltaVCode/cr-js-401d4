import React from 'react';
import { Route } from 'react-router-dom';
import PlayersList from './players-list';
import EditPlayerSchema from './edit-player-schema';
import EditPlayerRedux from './edit-player-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Players</h2>
        <PlayersList />

        <Route path='/players/:id/edit-schema' component={EditPlayerSchema} />
        <Route path='/players/:id/edit-redux' component={EditPlayerRedux} />
      </div>
    );
  }
}
export default App;
