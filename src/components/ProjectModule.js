// components/ProjectModule.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';
// other imports
import { findProjectsByType } from '../assets/helpers';

class ProjectModule extends Component {
  constructor() {
    super();

    this._renderProjects = this._renderProjects.bind(this);
  }

  _renderProjects(key, projects) {
    let name = projects[key].name;

    return (
      <Link key={key} className="card" to={`/app/projects/${projects[key].slug}`} title={name}>
        <span className="card-image">
          {/* Project image goes here - if there is one! */}
          <span className="card-text">{name.charAt(0)}</span>
        </span>
      </Link>
    )
  }

  render() {
    // filter projects by type
    const projects = findProjectsByType(this.props.projects, this.props.type);

    return (
      <div className="module">
        <h2>{this.props.title}</h2>

        <div className="grid-flex">
          {Object.keys(projects).map(key => this._renderProjects(key, projects))}
        </div>
      </div>
    )
  }
}

export default ProjectModule;
