import React, {Component} from 'react';
import './App.css';
import Encounter from './components/Encounter';
import { Jumbotron, Container } from 'react-bootstrap';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Jumbotron>
          <h1>CritSuccess!</h1>
        </Jumbotron>
        <Container fluid="lg">
          <Encounter />
        </Container>
        
      </div>
    );
  }
}

export default App;
