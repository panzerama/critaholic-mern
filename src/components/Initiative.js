import React, {Component} from 'react';
import './Component.css';
import Value from './Value';

class Initiative extends Component {
  render () {
    return (
      <div className="Initiative">
          <Value />
        <p>Falkrainne</p>
      </div>
    );
  }
}

export default Initiative;