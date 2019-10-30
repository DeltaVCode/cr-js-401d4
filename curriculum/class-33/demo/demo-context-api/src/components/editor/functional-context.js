import React, {useContext} from 'react';
import uuid from 'uuid';
import { SettingsContext } from '../settings/site-context.js';
import SettingsForm from './settings-form';

const SetRandomTitle = () => {
  const context = useContext(SettingsContext);

  return (
    <button onClick={() => context.setTitle(uuid())}>Generate Random Title</button>
  );
}

const Content = (props) => {
  const context = useContext(SettingsContext);

  return (
    <section>
      <h1>{context.title}</h1>
      <SetRandomTitle />
      <SettingsForm />
    </section>
  );
};

export default Content;
