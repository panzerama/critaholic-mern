import React, {Component} from 'react';
import './App.css';
import Encounter from './components/Encounter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>CritSuccess!</h1>
        <Encounter />
      </div>
    );
  }
}

export default App;
