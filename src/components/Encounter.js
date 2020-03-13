import React, {Component} from 'react';
import './Component.css';
import Initiative from './Initiative'

class Encounter extends Component {
  render () {
    return (
        <div>
            <Initiative />
            <Initiative />
            <Initiative />
            <Initiative />
        </div>
    );
  }
}

export default Encounter;
