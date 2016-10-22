// components/Overview.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
// components import
import ProjectModule from '../components/ProjectModule';
import Notice from '../components/Notice';
import Currency from '../components/Currency';
// other imports
import { formatPrice, findProjectsByType } from '../assets/helpers';

class Overview extends Component {
  _renderProjectsList(key, projects, settings) {
    const activeProjects = findProjectsByType(projects, 'active');
    const project = activeProjects[key];
    const { hour_error, markup, tax, discount } = project.settings;
    // calculations
    const totalHours = (project.hours * hour_error) + project.hours;
    const assetsTotal = this.props.assetsFixed + this.props.assetsVariable + this.props.assetsDepreciation;
    const totalBasedOnCost = ((settings.salary + assetsTotal) / 20) / 8;
    const cost = totalHours * totalBasedOnCost;
    const totalJob = (cost * markup) + cost;
    const totalWithTaxes = (totalJob * tax) + totalJob;

    return (
      <li key={key}>
        <b>→ {project.name}</b>
        {/*<br />
        <i>⌙ {this.props.projects[key].client}</i>// find the client of this project */}
        <span className="pull-right"><Currency currency={settings.currency} /> {formatPrice(totalWithTaxes)}</span>
      </li>
    )
  }

  render() {
    const currency = this.props.settings.currency;
    const assetsF = this.props.assetsFixed;
    const assetsV = this.props.assetsVariable;
    const assetsD = this.props.assetsDepreciation;

    return (
      <DocumentTitle title='Overview - FreelancerCalculator'>
        <div className="page-overview">
          <h1>Overview Page!</h1>

          <Notice currency={this.props.settings.currency} income={this.props.income} expenses={this.props.expenses} />

          <ProjectModule title="Active Projects" projects={this.props.projects} type="active" />

          <div className="grid-flex grid-flex-between">
            <div className="module grid-flex-item-1-2">
              <h2>Expenses</h2>

              <ul>
                <li>
                  <h3>Assets</h3>
                  <ul>
                    <li>→ Fixed <span className="pull-right"><Currency currency={currency} /> {formatPrice(assetsF)}</span></li>
                    <li>→ Variable <span className="pull-right"><Currency currency={currency} /> {formatPrice(assetsV)}</span></li>
                    <li>→ Depreciation <span className="pull-right"><Currency currency={currency} /> {formatPrice(assetsD)}</span></li>
                  </ul>
                </li>
                <li>
                  <h3>Estimated monthly costs <span className="pull-right"><Currency currency={currency} /> {formatPrice(assetsF + assetsV + assetsD)}</span></h3>
                </li>
              </ul>
            </div>

            <div className="module grid-flex-item-1-2">
              <h2>Income</h2>

              <ul>
                {Object.keys(findProjectsByType(this.props.projects, 'active')).map(key => this._renderProjectsList(key, this.props.projects, this.props.settings))}
                <li>
                  <h3>Estimated monthly income <span className="pull-right"><Currency currency={currency} /> {formatPrice(this.props.income)}</span></h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Overview;
