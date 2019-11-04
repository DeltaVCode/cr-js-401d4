import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ClassCounter from './class-counter';
import HooksCounter from './hooks-counter';
import ReducerCounter from './reducer-counter';
import ReduxCounter from './redux-counter';
import Header from './header';

function App() {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li><Link to="/"><code>this.state</code></Link></li>
          <li><Link to="/useState"><code>useState</code></Link></li>
          <li><Link to="/useState3"><code>useState &times;3</code></Link></li>
          <li><Link to="/useReducer"><code>useReducer</code></Link></li>
          <li><Link to="/redux">Redux</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/useState" component={HooksCounter} />
        <Route path="/useState3" render={() => (
          <>
            <HooksCounter />
            <HooksCounter />
            <HooksCounter />
          </>
        )} />
        <Route path="/useReducer" component={ReducerCounter} />
        <Route path="/redux" component={ReduxCounter} />
        <Route component={ClassCounter} />
      </Switch>
    </div>
  );
}

export default App;
