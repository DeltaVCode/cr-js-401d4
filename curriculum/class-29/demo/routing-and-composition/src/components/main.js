import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home.js';
import About from './about';
import PageWithButton from './page-with-button';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/button/:text?" component={PageWithButton} />
        <Route render={
          () => <h1>Not Found</h1>
        } />
      </Switch>
    </main>
  );
};

export default Main;
