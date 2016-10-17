// components/Currency.js

// main imports
import React, { Component } from 'react';

class Currency extends Component {
  render() {
    const userCurrency = this.props.currency;
    let currency;

    switch (userCurrency) {
      case "euro":
        currency = '€';
        break;
      default:
        currency = '$';
    }

    return (
      <span>{currency}</span>
    )
  }
}

export default Currency;
