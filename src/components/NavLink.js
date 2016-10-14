// components/NavLink.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
  render() {
    return <Link {...this.props} activeClassName="menu-link-active"/>
  }
}

export default NavLink;
