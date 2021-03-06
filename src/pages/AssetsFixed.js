// pages/AssetsFixed.js

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
        <h1><Link to="/app/assets">Assets</Link> / fixed</h1>

        <AssetForm addNewAsset={this.props.addNewAsset} type="fixed" />

        <AssetTable assets={this.props.assets.fixed} currency={this.props.currency} removeAsset={this.props.removeAsset} type="fixed" />
      </div>
    )
  }
}

export default AssetsFixed;
