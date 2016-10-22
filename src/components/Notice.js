// components/Notice.js

// main imports
import React, { Component } from 'react';
// components import
import Currency from './Currency';
// other imports
import { formatPrice } from '../assets/helpers';

class Notice extends Component {
  render() {
    let message;
    let divClass;
    if (this.props.income > this.props.expenses) {
      message = <p>Yay! You'll be able to pay all your bills this month, and have <b><Currency currency={this.props.currency} /> {formatPrice(this.props.income - this.props.expenses)}</b> extra to save! Good job! 😎</p>;
      divClass = 'success';
    } else {
      message = <p>Bummer... You still need <b><Currency currency={this.props.currency} /> {formatPrice(this.props.expenses - this.props.income)}</b> in order to pay your bills this month! 😬<br />Don't give up!!</p>;
      divClass = 'error';
    }

    return (
      <div className={`notice ${divClass}`}>
        {message}
      </div>
    )
  }
}

export default Notice;
