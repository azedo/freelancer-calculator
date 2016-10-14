// components/Project.js

// main imports
import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div>
        <h2>This is the Project Page!</h2>
        <h3>Name of project => {this.props.params.projectName}</h3>
      </div>
    )
  }
}

export default Project;
