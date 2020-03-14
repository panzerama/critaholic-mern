import React, {Component} from 'react';
import './Component.css';
import { Col } from 'react-bootstrap';

class Name extends Component {
  render () {
    return (
      <Col><h2>{this.props.name}</h2></Col>
    );
  }
}

export default Name;