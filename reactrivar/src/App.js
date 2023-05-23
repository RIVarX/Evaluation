import React, { Component } from 'react';

import Bag from './Bag.js';
import Pump from './Pump.js';
import { BagComponent } from './BagComponent.js';
import { PumpComponent } from './PumpComponent.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.bag = new Bag();
    this.pump = new Pump(this.bag);

  }

  render() {
    return (
      <table>
        <tbody>
          <BagComponent bag={this.bag}/>
          <PumpComponent pump={this.pump} />
        </tbody>
      </table>
    );
  }
}

export default App;
