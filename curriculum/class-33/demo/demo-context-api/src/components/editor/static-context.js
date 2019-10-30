import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class Content extends React.Component {
  static contextType = SettingsContext;

  render() {
    return (
      <section>
        <h1>{this.context.title}</h1>
        <p>
          <input
            onChange={e => this.context.setTitle(e.target.value)}
            value={this.context.title} />
        </p>
      </section>
    );
  }
}

export default Content;
