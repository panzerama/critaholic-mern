import React, {Component} from 'react';
import './Component.css';
import Initiative from './Initiative';
import { Container } from 'react-bootstrap';

class Encounter extends Component {
  render () {
    return (
        <Container>
            <Initiative value="20" name="Shaltorinn"/>
            <Initiative value="16" name="Lorn"/>
            <Initiative value="9" name="Dragon"/>
            <Initiative value="2" name="Falkrainne"/>
        </Container>
    );
  }
}

export default Encounter;
