import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ClassCounter from './class-counter';
import HooksCounter from './hooks-counter';
import ReducerCounter from './reducer-counter';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/"><code>this.state</code></Link></li>
          <li><Link to="/useState"><code>useState</code></Link></li>
          <li><Link to="/useReducer"><code>useReducer</code></Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/useState" component={HooksCounter} />
        <Route path="/useReducer" component={ReducerCounter} />
        <Route component={ClassCounter} />
      </Switch>
    </div>
  );
}

export default App;
