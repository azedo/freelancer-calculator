// components/ProjectsAll.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class ProjectsAll extends Component {
  render() {
    return (
      <DocumentTitle title='Projects - FreelancerCalculator'>
        <div>
          <h1>Projects:</h1>
          {/* add the children components here with props */}
          {React.cloneElement(this.props.children, {
            activeProjects: this.props.activeProjects,
            waitingProjects: this.props.waitingProjects,
            deliveredProjects: this.props.deliveredProjects,
            canceledProjects: this.props.canceledProjects,
          })}
        </div>
      </DocumentTitle>
    )
  }
}

export default ProjectsAll;
