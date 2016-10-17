// main imports
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
// component imports
import Login from './pages/Login';
import App from './pages/App';
import Overview from './pages/Overview';
import ProjectsAll from './pages/ProjectsAll';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Assets from './pages/Assets';
import AssetsSummary from './pages/AssetsSummary';
import AssetsFixed from './pages/AssetsFixed';
import AssetsVariable from './pages/AssetsVariable';
import AssetsDepreciation from './pages/AssetsDepreciation';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
// css import
import './assets/pure-release-0.6.0/base-min.css';
import './assets/pure-release-0.6.0/pure-min.css';
import './css/style.css';

const Root = (
  <Router history={browserHistory}>
    {/* login page */}
    <Route path="/" component={Login}/>

    {/* app routes */}
    <Route path="app" component={App}>
      <IndexRedirect to="overview" />
      <Route path="overview" component={Overview} />
      <Route path="projects" component={ProjectsAll}>
        <IndexRedirect to="list" />
        <Route path="list" component={Projects} />
        <Route path=":projectName" component={Project} />
      </Route>
      <Route path="assets" component={Assets}>
        <IndexRedirect to="summary" />
        <Route path="summary" component={AssetsSummary} />
        <Route path="fixed" component={AssetsFixed} />
        <Route path="variable" component={AssetsVariable} />
        <Route path="depreciation" component={AssetsDepreciation} />
      </Route>
      <Route path="settings" component={Settings} />
      <Route path="profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

render(Root, document.getElementById('root'));
