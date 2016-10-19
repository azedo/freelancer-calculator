// components/AssetsFixed.js

// main imports
import React, { Component } from 'react';
import { Link } from 'react-router';
// components import
import AssetForm from '../components/AssetForm';
import AssetTable from '../components/AssetTable';

class AssetsFixed extends Component {
  render() {
    return (
      <div>
        <h1><Link to="/app/assets">Assets</Link> / depreciation</h1>

        <AssetForm addNewAsset={this.props.addNewAsset} type="depreciation" />

        <AssetTable assets={this.props.assets.depreciation} currency={this.props.currency} removeAsset={this.props.removeAsset} type="depreciation" />
      </div>
    )
  }
}

export default AssetsFixed ;
