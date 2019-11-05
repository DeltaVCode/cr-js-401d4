import React from 'react';
import PlayersList from './players-list';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Players</h2>
        <PlayersList />
      </div>
    );
  }
}
export default App;
