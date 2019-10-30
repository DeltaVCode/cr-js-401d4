import React, { useContext } from 'react';
import { SettingsContext } from '../settings/site-context';

export default function SettingsForm() {
  const settings = useContext(SettingsContext);

  return (
    <form>
      <h2>Site Settings</h2>
      <label>
        <span>Site Title</span>
        <input placeholder="Site Title"
          name="title"
          value={settings.title}
          onChange={e => settings.setTitle(e.target.value)} />
      </label>
      <label>
        <span>Twitter</span>
        <input placeholder="@username"
          name="twitter"
          value={settings.twitter}
          onChange={e => settings.setTwitter(e.target.value)} />
      </label>
    </form>
  )
}