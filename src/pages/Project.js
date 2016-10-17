// components/Project.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Project extends Component {
  render() {
    const title = `${this.props.params.projectName} - FreelancerCalculator`;
    return (
      <DocumentTitle title={title}>
        <div>
          <h2>This is the Project Page!</h2>
          <h3>Name of project => {this.props.params.projectName}</h3>
        </div>
      </DocumentTitle>
    )
  }
}

export default Project;
