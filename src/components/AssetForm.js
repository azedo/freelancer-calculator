// components/AssetForm.js

// main imports
import React, { Component } from 'react';

class AssetForm extends Component {
  constructor() {
    super();

    this._createAsset = this._createAsset.bind(this);
    this._renderForm = this._renderForm.bind(this);
    this._showForm = this._showForm.bind(this);

    // set the inital state for the form
    this.state = {
      formVisible: false
    }
  }

  _createAsset(e) {
    // prevent form from submitting
    e.preventDefault();

    // Check if form is valid
    const hasAssetName = this.assetName.value.trim();
    const hasAssetValue = this.assetValue.value.trim();
    if (!hasAssetName || !hasAssetValue) {
      console.log('Please add both values in order to add a new asset!');
      return;
    }

    // save new input in a asset object
    const asset = {
      date: Date.now(),
      name: this.assetName.value,
      amount: Number(this.assetValue.value),
    }

    // add values to asset object in case is a depreciation asset
    if (this.props.type === 'depreciation') {
      const depreciationFields = {
        bought: this.assetDateOfPurchase.value,
        lifespan: Number(this.assetLifeSpan.value),
      }
      Object.assign(asset, depreciationFields);
    }

    // It's valid, send to db using the proper methods
    this.props.addNewAsset(asset, this.assetType.value);

    // Back to default
    this.newAssetForm.reset();

    // Hide the form
    this._showForm(e);
  }

  _showForm(e) {
    e.preventDefault();

    const formVisible = this.state.formVisible;

    // set the new state
    this.setState({
      formVisible: !formVisible
    });
  }

  _renderForm() {
    const { type } = this.props;
    let lifeSpan, dateOfPurchase;

    if (type === 'depreciation') {
      lifeSpan = <input type="number" ref={(input) => this.assetLifeSpan = input } placeholder="Lifespan" />;
      dateOfPurchase = <input type="date" ref={(input) => this.assetDateOfPurchase = input } placeholder="Date of purchase" />;
    }

    if (this.state.formVisible) {
      return (
        <form ref={(input) => this.newAssetForm = input } className="pure-form" onSubmit={(e) => this._createAsset(e)}>
          <legend>Add new asset:</legend>

          <div className="form-inner">
            <input type="text" ref={(input) => this.assetName = input } placeholder="Name" />
            {lifeSpan}
            {dateOfPurchase}
            <input type="number" ref={(input) => this.assetValue = input } placeholder="Value" />
            <input type="hidden" ref={(input) => this.assetType = input } value={this.props.type} />

            <button type="submit" className="pure-button pure-button-primary">+ Add</button>
            <button className="pure-button button-close" onClick={(e) => this._showForm(e)}>Close</button>
          </div>
        </form>
      )
    } else {
      return <button className="pure-button pure-button-primary" onClick={(e) => this._showForm(e)}>+ Add new asset</button>
    }
  }

  render() {
    return (
      <div className="form">
        {this._renderForm()}
      </div>
    )
  }
}

export default AssetForm ;
