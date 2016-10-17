// components/Overview.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
// components import
import ProjectModule from '../components/ProjectModule';

class Overview extends Component {
  render() {
    return (
      <DocumentTitle title='Overview - FreelancerCalculator'>
        <div className="page-overview">
          <h1>Overview Page!</h1>

          <div className="notice">
            <p>Yay! You'll be able to pay all your bills this month, and have $$$$ extra to save! Good job! 😎</p>
            <p>Bummer... You still need $$$$ in order to pay your bills this month! 😬</p>
            <p>Don't give up!!</p>
          </div>

          <ProjectModule title="Active Projects" projects={this.props.activeProjects} />

          <div className="grid-flex grid-flex-between">
            <div className="module grid-flex-item-1-2">
              <h2>Expenses:</h2>

              <ul>
                <li>
                  <h3>_Assets</h3>
                  <ul>
                    <li>→ Fixed</li>
                    <li>→ Variable</li>
                    <li>→ Depreciation</li>
                  </ul>
                </li>
                <li>
                  <h3>_Estimated monthly costs</h3>
                </li>
              </ul>
            </div>

            <div className="module grid-flex-item-1-2">
              <h2>Income for this month:</h2>

              <div className="group">
                <div className="blob pull-left">
                  <b>→ Hot Site</b>
                  <br />
                  <i>⌙ Balaclava</i>
                </div>
                <div className="pull-right">
                  <b>$$$</b>
                </div>
              </div>

              <div className="group">
                <div className="blob pull-left">
                  <b>→ Another Site</b>
                  <br />
                  <i>⌙ Sensorama</i>
                </div>
                <div className="pull-right">
                  <b>$$$</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Overview;
