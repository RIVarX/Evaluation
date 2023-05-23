import React, { Component } from 'react';
import { InputField } from './InputField.js';

export class PumpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pump: props.pump,
    };
  }

  render() {
    return (
      <tr>
        <InputField id="dose" label="Dose" rivar={this.state.pump.dose} />
        <InputField id="duration" label="Duration" rivar={this.state.pump.duration} />
        <InputField id="rate" label="Rate" rivar={this.state.pump.rate} />
      </tr>
    );
  }
}
