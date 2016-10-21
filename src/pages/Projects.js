// components/Projects.js

// main imports
import React, { Component } from 'react';
// components import
import ProjectModule from '../components/ProjectModule';

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="grid-flex grid-flex-between">
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Active Projects" projects={this.props.projects} type="active" />
          </div>
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Waiting for Approval" projects={this.props.projects} type="waiting" />
          </div>
        </div>
        <div className="grid-flex grid-flex-between">
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Delivered Projects" projects={this.props.projects} type="delivered" />
          </div>
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Canceled Projects" projects={this.props.projects} type="canceled" />
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
