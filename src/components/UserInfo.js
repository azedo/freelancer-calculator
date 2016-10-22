// components/UserInfo.js

// main imports
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
// components import
import Currency from './Currency';
// other imports
import moment from 'moment';
import { formatPrice, findProjectsByType } from '../assets/helpers';

class UserInfo extends Component {
  constructor() {
    super();

    this._income = this._income.bind(this);
    this._assetsFixed = this._assetsFixed.bind(this);
    this._assetsVariable = this._assetsVariable.bind(this);
    this._assetsDepreciation = this._assetsDepreciation.bind(this);
  }

  componentDidMount() {
    const income = this._income();
    const assetsFixed = this._assetsFixed();
    const assetsVariable = this._assetsVariable();
    const assetsDepreciation = this._assetsDepreciation();
    const expenses = this._assetsFixed() + this._assetsVariable() + this._assetsDepreciation();

    // update the income and expenses in the state of the app
    this.props.updateIncomeExpenses(income, expenses, assetsFixed, assetsVariable, assetsDepreciation);
  }

  _assetsFixed() {
    // assets total - fixed
    const assetsFixed = this.props.user.assets.fixed;
    const activeAssetsFId = Object.keys(assetsFixed);
    const expenseAssetsF = activeAssetsFId.reduce((prevTotal, key) => {
      const assetFixed = assetsFixed[key];

      if (assetFixed) {
        return prevTotal + (assetFixed.amount || 0);
      }
      return prevTotal;
    }, 0);

    return expenseAssetsF;
  }

  _assetsVariable() {
    // assets total - variable
    const assetsVariable = this.props.user.assets.variable;
    const activeAssetsVId = Object.keys(assetsVariable);
    const expenseAssetsV = activeAssetsVId.reduce((prevTotal, key) => {
      const assetVariable = assetsVariable[key];

      if (assetVariable) {
        return prevTotal + (assetVariable.amount || 0);
      }
      return prevTotal;
    }, 0);

    return expenseAssetsV;
  }

  _assetsDepreciation() {
    // and the valid assets
    const assetsDepreciation = this.props.user.assets.depreciation;
    let assetsDepreciationArr = [];
    if (assetsDepreciation) {
      Object.keys(assetsDepreciation).map(key => {
        if (moment(assetsDepreciation[key].bought).add(assetsDepreciation[key].lifespan, 'y') >= Date.now()) {
          assetsDepreciationArr.push(assetsDepreciation[key]);
        }
      });
    }
    // assets total - depreciation
    const activeAssetsDId = Object.keys(assetsDepreciationArr);
    const expenseAssetsD = activeAssetsDId.reduce((prevTotal, key) => {
      const assetDepreciation = assetsDepreciationArr[key];

      if (assetDepreciation) {
        return prevTotal + (assetDepreciation.amount || 0);
      }
      return prevTotal;
    }, 0);

    return expenseAssetsD;
  }

  _income() {
    // get only the active projects
    const activeProjects = findProjectsByType(this.props.user.projects, 'active');
    // add the total values for the income
    const activeProjectsId = Object.keys(activeProjects);
    const assetsTotal = this._assetsFixed() + this._assetsVariable() + this._assetsDepreciation();
    const income = activeProjectsId.reduce((prevTotal, key) => {
      const project = activeProjects[key];
      const { hour_error, markup, tax, discount } = project.settings;
      // calculations
      const totalHours = (project.hours * hour_error) + project.hours;
      const totalBasedOnCost = ((this.props.user.settings.salary + assetsTotal) / 20) / 8;
      const cost = totalHours * totalBasedOnCost;
      const totalJob = (cost * markup) + cost;
      const totalWithTaxes = (totalJob * tax) + totalJob;

      if (project) {
        return prevTotal + (totalWithTaxes || 0);
      }
      return prevTotal;
    }, 0);
    return income;
  }

  render() {
    return (
      <div className="user">
        <div className="user-id">
          <Gravatar email={this.props.user.profile.email} size={80} className="avatar" />
          <p>{this.props.user.profile.name}</p>
        </div>

        <div className="user-info group">
          <div className="user-info-block">
            <h6>Income</h6>
            <Currency currency={this.props.user.settings.currency} />
            <span className="pull-right">{formatPrice(this._income())}</span>
          </div>
          <div className="user-info-block">
            <h6>Expenses</h6>
            <Currency currency={this.props.user.settings.currency} />
            <span className="pull-right">{formatPrice(this._assetsFixed() + this._assetsVariable() + this._assetsDepreciation())}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo;
