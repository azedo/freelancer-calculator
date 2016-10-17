// components/UserInfo.js

// main imports
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
// components import
import Currency from './Currency';
// other imports
import { formatPrice } from '../assets/helpers';

class UserInfo extends Component {
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
            <span className="pull-right">{formatPrice(200000)}</span>
          </div>
          <div className="user-info-block">
            <h6>Expenses</h6>
            <Currency currency={this.props.user.settings.currency} />
            <span className="pull-right">{formatPrice(130000)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo;
