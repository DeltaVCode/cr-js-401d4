import React from 'react';

import Main from './main.js';
import Header from './components/header';
import ThemeForm from './components/theme/form';

import SettingsProvider from './components/settings/site-context';
import ThemeProvider from './components/theme/theme-context';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider defaultMode='dark'>
        <SettingsProvider>
          <Header />
          <ThemeForm />
          <Main />
        </SettingsProvider>
      </ThemeProvider>
    );
  }
}
