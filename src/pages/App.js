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
    function findProjectsByType(projects, type) {
      let projectsArr = [];

      if (projects) {
        Object.keys(projects).map(key => {
          if (projects[key][type] === true) {
            projectsArr.push(projects[key]);
          }
          return projectsArr;
        });
      }
      return projectsArr;
    }

    const activeProjectsArr = findProjectsByType(this.state.user.projects, 'active');
    const waitingProjectsArr = findProjectsByType(this.state.user.projects, 'waiting');
    const deliveredProjectsArr = findProjectsByType(this.state.user.projects, 'delivered');
    const canceledProjectsArr = findProjectsByType(this.state.user.projects, 'canceled');

    return (
      <DocumentTitle title='App - FreelancerCalculator'>
        <div className="app pure-g">
          <Menu user={this.state.user} activeProjects={activeProjectsArr} />

          <div className="content pure-u">
            <div className="inner page">
              {/* add the children components here */}
              {React.cloneElement(this.props.children, {
                activeProjects: activeProjectsArr,
                waitingProjects: waitingProjectsArr,
                deliveredProjects: deliveredProjectsArr,
                canceledProjects: canceledProjectsArr,
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
