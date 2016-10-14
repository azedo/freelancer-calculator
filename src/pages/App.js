// components/App.js

// main imports
import React, { Component } from 'react';
// components import
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div className="app pure-g">
        <Menu />

        <div className="content pure-u">
          {/* add the children components here */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
