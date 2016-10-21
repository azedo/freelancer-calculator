// pages/App.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
// components import
import Menu from '../components/Menu';
// data import
import data from '../assets/data';

// create an object for default data
const defaultState = { user: data }

class App extends Component {
  constructor() {
    super();

    this._addNewAsset = this._addNewAsset.bind(this);
    this._removeAsset = this._removeAsset.bind(this);

    // getInitialState
    this.state = defaultState;
  }

  _addNewAsset(asset, type) {
    // get a copy of our state
    let s = {...this.state.user};

    // add in the new asset based on it's type
    const timestamp = Date.now();
    s.assets[type][`asset-${type}-${timestamp}`] = asset;

    // set the new state
    this.setState({
      user: s
    });

    // log
    console.log(`[log] ✅ Asset added successfully!`);
  }

  _removeAsset(key, type) {
    // get a copy of our state
    const s = {...this.state.user}

    // remove the selected asset
    delete s.assets[type][key];

    // set the new state
    this.setState({
      user: s
    });

    // log
    console.log(`[log] ✅ Asset removed successfully!`);
  }

  render() {
    const projects = this.state.user.projects;

    return (
      <DocumentTitle title='App - FreelancerCalculator'>
        <div className="app pure-g">
          <Menu user={this.state.user} projects={projects} />

          <div className="content pure-u">
            <div className="inner page">
              {/* add the children components here */}
              {React.cloneElement(this.props.children, {
                projects: projects,
                assets: this.state.user.assets,
                addNewAsset: this._addNewAsset,
                removeAsset: this._removeAsset,
                settings: this.state.user.settings,
              })}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
