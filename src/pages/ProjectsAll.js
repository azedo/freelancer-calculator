// components/ProjectsAll.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class ProjectsAll extends Component {
  render() {
    return (
      <DocumentTitle title='Projects - FreelancerCalculator'>
        <div>
          {/* add the children components here with props */}
          {React.cloneElement(this.props.children, {
            projects: this.props.projects,
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
