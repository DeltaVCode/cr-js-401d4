import React from 'react';
import useSettings from './settings';
import useTheme from './theme';

import './header.scss';

export default function Header() {
  let settings = useSettings();
  let theme = useTheme();

  return (
    <header className={theme.mode}>
      Follow me on Twitter: {settings.twitter}
    </header>
  );
}
