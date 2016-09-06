import React, { Component, PropTypes } from 'react';
import styles from './App.pcss';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App
