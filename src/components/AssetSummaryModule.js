// components/AssetsSummaryModule.js

// main imports
import React, { Component } from 'react';
// components import
import Currency from './Currency';
import NavLink from './NavLink';
// other imports
import { objectLength, formatPrice, slugify } from '../assets/helpers';

class AssetsSummaryModule extends Component {
  render() {
    const name = this.props.name;
    const assets = Object.keys(this.props.asset);
    const assetsTotal = assets.reduce((prevTotal, key) => {
      const asset = this.props.asset[key];

      if (asset) {
        return prevTotal + (asset.amount || 0);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="module">
        <h3><NavLink to={`/app/assets/${slugify(name)}`}>{name}</NavLink></h3>
        <h6><i>{this.props.description}</i></h6>

        <p>At this moment you have <i>{objectLength(assets)}</i> fixed expenses in a total of <b><Currency currency={this.props.currency} /> {formatPrice(assetsTotal)}</b></p>
      </div>
    )
  }
}

export default AssetsSummaryModule ;
