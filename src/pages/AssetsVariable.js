// components/AssetsVariable.js

// main imports
import React, { Component } from 'react';
// components import
import AssetForm from '../components/AssetForm';
import AssetTable from '../components/AssetTable';

class AssetsVariable extends Component {
  render() {
    return (
      <div>
        <h1>Assets / variable</h1>

        <AssetForm addNewAsset={this.props.addNewAsset} type="variable" />

        <AssetTable assets={this.props.assets.variable} currency={this.props.currency} removeAsset={this.props.removeAsset} type="variable" />
      </div>
    )
  }
}

export default AssetsVariable;
