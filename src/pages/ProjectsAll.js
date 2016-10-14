// components/ProjectsAll.js

// main imports
import React, { Component } from 'react';

class ProjectsAll extends Component {
  render() {
    return (
      <div>
        <h1>ProjectsAll Page!</h1>
        {/* add the children components here */}
        {this.props.children}
      </div>
    )
  }
}

export default ProjectsAll;
