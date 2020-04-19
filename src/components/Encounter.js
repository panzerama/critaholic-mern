import React, {Component} from 'react';
import './Component.css';
import Initiative from './Initiative';

class Encounter extends Component {
  constructor () {
    super();
    this.state = {encounter: ""};
  }

  componentDidMount() {
    const initiativesPromise = fetch('http://localhost:8000/');
    initiativesPromise.then((response) => {
      response.json().then((initiatives) => {
        const encounter = initiatives.map((initiative) => <Initiative key={initiative.name} value={initiative.value} name={initiative.name} />)
        this.setState({encounter: encounter});
      })
    });
    console.log("component did mount");
  }

  render () {
    return this.state.encounter;
  }
}

export default Encounter;
