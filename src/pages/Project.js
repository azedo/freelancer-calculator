// components/Project.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
// other imports
import { findProjectsById } from '../assets/helpers';

class Project extends Component {
  render() {
    // filter by project slug
    const projectData = findProjectsById(this.props.projects, this.props.params.projectName);
    const project = projectData[0];

    const title = `${project.name} - FreelancerCalculator`;

    return (
      <DocumentTitle title={title}>
        <div>
          <h1><Link to="/app/projects">Projects</Link> / {project.name}</h1>
        </div>
      </DocumentTitle>
    )
  }
}

export default Project;
