import React, {Component} from 'react';
import './Component.css';
import Initiative from './Initiative';

import { Row, Col, Alert } from 'react-bootstrap';

class Encounter extends Component {
  constructor (props) {
    super(props);
    this.state = { encounter: "", userID: props.userID };
    console.log('userID in Encounter is ' + props.userID);
  }

  handleEncounterResponse(result) {
    console.log("encounter name " + result[0].name);
    const encounterInitiatives = result[0].initiatives.map((initiative) => <Initiative key={initiative.name} value={initiative.value} name={initiative.name} />);
    const encounterView = (
      <Row>
        <Col>
          <h1> {result[0].name} </h1> 
          <br/> 
          {encounterInitiatives}
        </Col>
      </Row>
    );
    this.setState({encounter: encounterView}); 
  }

  handleError(error) {
    console.log("handleError " + error);
    const errorView = <Alert variant="warning">Error! Error! Danger Will Robinson!</Alert>;
    this.setState({encounter: errorView});
  }

  componentDidMount() {
    fetch('http://localhost:8000/encounters/' + this.state.userID)
    .then(response => response.json())
    .then(
      (result) => {
        console.log("Encounter did load successfully");
        this.handleEncounterResponse(result);
      },
      (error) => {
        console.log("Encounter did not load successfully");
        this.handleError(error);
      }
    );
    
    console.log("component did mount");
  }

  render () {
    return this.state.encounter;
  }
}

export default Encounter;
