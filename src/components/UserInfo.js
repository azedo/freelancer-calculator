// components/UserInfo.js

// main imports
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

class UserInfo extends Component {
  render() {
    const userCurrency = this.props.user.settings.currency;
    let currency;

    switch (userCurrency) {
      case "euro":
        currency = '€';
        break;
      default:
        currency = '$';
    }
    return (
      <div className="user">
        <div className="user-id">
          <Gravatar email={this.props.user.profile.email} size={80} className="avatar" />
          <p>{this.props.user.profile.name}</p>
        </div>

        <div className="user-info group">
          <div className="user-info-block">
            <h6>Income</h6>
            <span>{currency}</span>
            <span className="pull-right">2.000,00</span>
          </div>
          <div className="user-info-block">
            <h6>Expenses</h6>
            <span>{currency}</span>
            <span className="pull-right">1.300,00</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo;
