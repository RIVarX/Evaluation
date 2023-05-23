import React, { Component } from 'react';
import { InputField } from './InputField.js';

export class BagComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bag: props.bag,
    };
  }
  render() {
    return (
      <tr>
        <InputField id="drug" label="Drug" rivar={this.state.bag.amount} />
        <InputField id="concentration" label="Concentration" rivar={this.state.bag.concentration} />
        <InputField id="volume" label="VolumeOfFluid" rivar={this.state.bag.volume} />
      </tr>
    );
  }
}
