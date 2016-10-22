// components/Menu.js

// main imports
import React, { Component } from 'react';
// component imports
import NavLink from './NavLink';
import UserInfo from './UserInfo';
// other imports
import { findProjectsByType } from '../assets/helpers';

class Menu extends Component {
  render() {
    const activeProjects = findProjectsByType(this.props.projects, 'active');
    return (
      <div className="menu pure-u">
        <div className="menu-toggle">Menu</div>

        <div className="inner">
          <UserInfo user={this.props.user} updateIncomeExpenses={this.props.updateIncomeExpenses} />

          <ul className="menu-links">
            <li><NavLink className="menu-link" to="/app/overview">Overview</NavLink></li>
            <li><NavLink className="menu-link" to="/app/projects">Projects ({activeProjects.length})</NavLink></li>
            <li>
              <NavLink className="menu-link" to="/app/assets">Assets</NavLink>
              <ul className="menu-submenu">
                <li><NavLink className="menu-submenulink" to="/app/assets/fixed">Fixed</NavLink></li>
                <li><NavLink className="menu-submenulink" to="/app/assets/variable">Variable</NavLink></li>
                <li><NavLink className="menu-submenulink" to="/app/assets/depreciation">Depreciation</NavLink></li>
              </ul>
            </li>
            <li><NavLink className="menu-link" to="/app/settings">Settings</NavLink></li>
            <li><NavLink className="menu-link" to="/app/profile">Profile</NavLink></li>
            <li><NavLink className="menu-link" to="/">Logout</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
