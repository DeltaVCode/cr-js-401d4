import React, {useContext} from 'react';
import uuid from 'uuid';
import { SettingsContext } from '../settings/site-context.js';

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
      <p>
        <input
          onChange={e => context.setTitle(e.target.value)}
          value={context.title} />
      </p>
    </section>
  );
};

export default Content;
