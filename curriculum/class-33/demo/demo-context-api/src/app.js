import React from 'react';

import Main from './main.js';
import SettingsProvider from './components/settings/site-context';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Main />
      </SettingsProvider>
    );
  }
}
