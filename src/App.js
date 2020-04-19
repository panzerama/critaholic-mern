import React, {Component} from 'react';
import './App.css';
import Encounter from './components/Encounter';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

class App extends Component {
  render () {
    
    return (
      <Container fluid>
        <Jumbotron>
          <h1>CritSuccess!</h1>
        </Jumbotron>
        
        <Form>
          <Form.Row className="align-items-end">
            <Form.Group column="true" className="col-2">
              <Form.Label>Initiative</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group column="true" className="col-8">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group column="true" className="col-1">
              <Button>Add</Button>
            </Form.Group>
          </Form.Row>
        </Form>
        <hr />
        <Encounter />
        
      </Container>
    );
  }
}

export default App;
