// components/AssetTable.js

// main imports
import React, { Component } from 'react';
// components import
import Currency from './Currency';
// other imports
import { formatPrice } from '../assets/helpers';
import moment from 'moment';

class AssetTable extends Component {
  constructor() {
    super();

    this._renderTableItems = this._renderTableItems.bind(this);
  }

  _renderTableItems(key, index) {
    const { name, amount } = this.props.assets[key];
    const { type } = this.props;
    const removeButton = <button onClick={() => this.props.removeAsset(key, type)}>&times;</button>
    let lifeSpan, dateOfPurchase, expirationDate;

    if (type === 'depreciation') {
      const { lifespan, bought } = this.props.assets[key];
      lifeSpan = <td>{lifespan}</td>;
      dateOfPurchase = <td>{moment(bought).format('DD/MM/YYYY')}</td>;
      expirationDate = <td>{moment(bought).add(lifespan, 'y').format('DD/MM/YYYY')}</td>;
    }

    return (
      <tr key={key}>
        <td>{index + 1}</td>
        <td>{name}</td>
        {lifeSpan}
        {dateOfPurchase}
        {expirationDate}
        <td><Currency currency={this.props.currency} /> {formatPrice(amount)}</td>
        <td>{removeButton}</td>
      </tr>
    )
  }

  render() {
    const assetsId = Object.keys(this.props.assets);
    const total = assetsId.reduce((prevTotal, key) => {
      const asset = this.props.assets[key];

      if (asset) {
        return prevTotal + (asset.amount || 0);
      }
      return prevTotal;
    }, 0);

    const { type } = this.props;
    let lifeSpan, dateOfPurchase, expirationDate, totalSpaces;
    if (type === 'depreciation') {
      lifeSpan = <th>Lifespan (years)</th>;
      dateOfPurchase = <th>Date of purchase</th>;
      expirationDate = <th>Expiration date</th>;
      totalSpaces = <td></td>;
    }

    return (
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            {lifeSpan}
            {dateOfPurchase}
            {expirationDate}
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(this.props.assets).map((key, index) => this._renderTableItems(key, index))}
          <tr>
            <td>=</td>
            <td>Total</td>
            {totalSpaces}
            {totalSpaces}
            {totalSpaces}
            <td><Currency currency={this.props.currency} /> {formatPrice(total)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default AssetTable;
