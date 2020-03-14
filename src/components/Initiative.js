import React, {Component} from 'react';
import './Component.css';
import Value from './Value';
import Name from './Name';
import { Row } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

class Initiative extends Component {
  render () {
    return (
      <Row>
        <Value value={this.props.value}/>
        <Name name={this.props.name}/>
        <List size="2em"/>
      </Row>
    );
  }
}

export default Initiative;