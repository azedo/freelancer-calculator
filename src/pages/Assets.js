// pages/Assets.js

// main imports
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Assets extends Component {
  render() {
    return (
      <DocumentTitle title='Assets - FreelancerCalculator'>
        {/* add the children components here with props */}
        {React.cloneElement(this.props.children, {
          assets: this.props.assets,
          addNewAsset: this.props.addNewAsset,
          removeAsset: this.props.removeAsset,
          currency: this.props.settings.currency,
        })}
      </DocumentTitle>
    )
  }
}

export default Assets;
