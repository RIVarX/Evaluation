import React, { Component } from 'react';
import { Signal } from 'rivarjs';

export class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rivar: props.rivar
    };
    
    this.state.rivar.subscribe((signal) => {
      if (this.state.value !== signal.value.toString()) {
        this.setState({
          value:signal.value.toString(),
        });
      }
    });
  }
 
  render() {
    const { id, label } = this.props;

    return (
      <td>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          value={this.state.value}
          onChange={this.state.rivar.next(new Signal(event.target.value))} />
      </td>
    );
  }
}
