import React, { Component } from 'react';
import './App.css';
import Encounter from './components/Encounter';
import { Jumbotron, Container, Form, Button, Alert } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { encounter: null };
  }

  handleUserID(event) {
    var userID = event.target.form.userID.value;
    console.log("target element " + userID);
    if (userID.length === 0) {
      const error = <Alert variant="danger">Please input a valid user id</Alert>
      this.setState({ encounter: error });
    }
    else {
      const encounter = <Encounter userID={event.target.form.userID.value} />
      this.setState({ encounter: encounter });
    }
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>CritSuccess!</h1>
        </Jumbotron>

        <Form>
          <Form.Row className="align-items-end">
            <Form.Group column="true" className="col-5">
              <Form.Label>User ID</Form.Label>
              <Form.Control type="text" id="userID" />
            </Form.Group>

            <Form.Group column="true" className="col-2" onClick={(event) => this.handleUserID(event)}>
              <Button>Get Encounter</Button>
            </Form.Group>
          </Form.Row>
        </Form>

        <Form>
          <Form.Row className="align-items-end">
            <Form.Group column="true" className="col-2">
              <Form.Label>Initiative</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group column="true" className="col-8">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group column="true" className="col-1">
              <Button>Add</Button>
            </Form.Group>
          </Form.Row>
        </Form>

        <hr />
        {this.state.encounter}

      </Container>
    );
  }
}

export default App;
