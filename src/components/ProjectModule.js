// components/ProjectModule.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectModule extends Component {
  constructor() {
    super();

    this._renderProjects = this._renderProjects.bind(this);
  }

  _renderProjects(key) {
    let name = this.props.projects[key].name;
    return (
      <Link key={key} className="card" to={`/app/projects/${this.props.projects[key].slug}`} title={name}>
        <span className="card-image">
          {/* Project image goes here - if there is one! */}
          <span className="card-text">{name.charAt(0)}</span>
        </span>
      </Link>
    )
  }

  render() {
    return (
      <div className="module">
        <h2>{this.props.title}:</h2>

        <div className="grid-flex">
          {Object.keys(this.props.projects).map(key => this._renderProjects(key))}
        </div>
      </div>
    )
  }
}

export default ProjectModule;
