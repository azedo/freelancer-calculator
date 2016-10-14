// components/Projects.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects Page!</h2>
        <ul>
          <li><Link to="/app/projects/Sadhu">Sadhu</Link></li>
          <li><Link to="/app/projects/Fitz">Fitz</Link></li>
          <li><Link to="/app/projects/Layla">Layla</Link></li>
          <li><Link to="/app/projects/Kira">Kira</Link></li>
          <li><Link to="/app/projects/Belinha">Belinha</Link></li>
        </ul>
      </div>
    )
  }
}

export default Projects;
