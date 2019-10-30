import React from 'react';
import useTheme from './index';

export default function ThemeForm() {
  const theme = useTheme();

  return (
    <form>
      <label>
        Dark
        <input type="radio" value="dark" name="mode"
          checked={theme.mode === 'dark'}
          onChange={(e) => theme.setMode(e.target.value)} />
      </label>
      <label>
        Light
        <input type="radio" value="light" name="mode"
          checked={theme.mode === 'light'}
          onChange={(e) => theme.setMode(e.target.value)} />
      </label>
    </form>
  )
}