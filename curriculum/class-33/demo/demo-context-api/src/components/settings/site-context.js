import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: 'DeltaV Context Demo',
      setTitle: this.setTitle,

      twitter: '@deltavcode',
      setTwitter: this.setTwitter,
    };
  }

  setTitle = (title) => {
    this.setState({ title });
  }

  setTwitter = (twitter) => {
    this.setState({ twitter });
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
