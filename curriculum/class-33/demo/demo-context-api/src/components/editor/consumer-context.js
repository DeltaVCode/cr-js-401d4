import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class Content extends React.Component {
  render() {
    return (
      <section>
        <SettingsContext.Consumer>
          {context => (
            <>
              <h1>{context.title}</h1>
              <h3>{context.twitter}</h3>
              <p>
                <input
                  onChange={e => context.setTitle(e.target.value)}
                  value={context.title} />
              </p>
            </>
          )}
        </SettingsContext.Consumer>
      </section>
    );
  }
}

export default Content;
