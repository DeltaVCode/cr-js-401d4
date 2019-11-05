import React from 'react';
import { Route } from 'react-router-dom';
import PlayersList from './players-list';
import EditPlayerSchema from './edit-player-schema';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Players</h2>
        <PlayersList />

        <Route path='/players/:id/edit' component={EditPlayerSchema} />
      </div>
    );
  }
}
export default App;
