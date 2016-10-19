// pages/AssetsSummary.js

// main imports
import React, { Component } from 'react';
// components import
import AssetSummaryModule from '../components/AssetSummaryModule';

class AssetsSummary extends Component {
  render() {
    return (
      <div>
        <h1>Assets</h1>

        <AssetSummaryModule asset={this.props.assets.fixed} name="Fixed" description="Monthly fixed expenses" currency={this.props.currency} />
        <AssetSummaryModule asset={this.props.assets.variable} name="Variable" description="Expenses that may vary each month" currency={this.props.currency} />
        <AssetSummaryModule asset={this.props.assets.depreciation} name="Depreciation" description="Expenses used for proffesional work that have a lifespan" currency={this.props.currency} />
      </div>
    )
  }
}

export default AssetsSummary;
