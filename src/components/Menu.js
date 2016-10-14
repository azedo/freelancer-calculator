// components/Menu.js

// main imports
import React, { Component } from 'react';
// components import
import NavLink from './NavLink';

class Menu extends Component {
  render() {
    return (
      <div className="menu pure-u">
        <ul>
          <li><NavLink className="menu-link" to="/app/overview">Overview</NavLink></li>
          <li><NavLink className="menu-link" to="/app/projects">Projects</NavLink></li>
          <li><NavLink className="menu-link" to="/app/assets">Assets</NavLink></li>
          <li><NavLink className="menu-link" to="/app/settings">Settings</NavLink></li>
          <li className="grid-spacing-vertical"><NavLink className="menu-link" to="/app/profile">Profile</NavLink></li>
          <li className="menu-link-last"><NavLink className="menu-link" to="/">Logout</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Menu;
