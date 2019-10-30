import React from 'react';

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      mode: props.defaultMode || 'light',
      toggleMode: this.toggleMode,
      setMode: this.setMode,
    };
  }

  setMode = (mode) => {
    this.setState({ mode });
  }

  toggleMode = () => {
    this.setState(state => ({
      mode: state.mode === 'dark' ? 'light' : 'dark',
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
