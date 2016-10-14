// components/Overview.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';

class Overview extends Component {
  render() {
    return (
      <div className="page-overview">
        <h1>Overview Page!</h1>

        <div className="notice">
          <p>Yay! You'll be able to pay all your bills this month, and have $$$$ extra to save! Good job! 😎</p>
          <p>Bummer... You still need $$$$ in order to pay your bills this month! 😬</p>
          <p>Don't give up!!</p>
        </div>

        <div className="module">
          <h2>Active Projects:</h2>

          <div className="grid-flex">
            <Link className="card" to="/app/projects/sadhu">
              <h4>Sadhu</h4>
            </Link>
            <Link className="card" to="/app/projects/fitz">
              <h4>Fitz</h4>
            </Link>
            <Link className="card" to="/app/projects/layla">
              <h4>Layla</h4>
            </Link>
          </div>
        </div>

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
    )
  }
}

export default Overview;
