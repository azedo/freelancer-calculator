// components/Projects.js

// main imports
import React, { Component } from 'react';
// components import
import ProjectModule from '../components/ProjectModule';

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="grid-flex grid-flex-between">
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Active Projects" projects={this.props.activeProjects} />
          </div>
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Waiting for Approval" projects={this.props.waitingProjects} />
          </div>
        </div>
        <div className="grid-flex grid-flex-between">
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Delivered Projects" projects={this.props.deliveredProjects} />
          </div>
          <div className="grid-flex-item-1-2">
            <ProjectModule title="Canceled Projects" projects={this.props.canceledProjects} />
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
