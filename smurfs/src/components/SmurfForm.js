import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addingSmurf} from '../actions';
export class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nge: '',
      height: ''
    };
  }
  handlerChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  formSubmit = event => {
    event.preventDefault();
    this.props.addingSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: '', age: '', height: '' });
  };
  render() {
    return (
        <form onSubmit={this.formSubmit}>
        <p>Name</p><input id='name' onChange={this.handlerChange} placeholder='enter ame..' value ={this.state.name}></input>
        <p>Age</p><input id='age' onChange={this.handlerChange} placeholder='enter smurf age' value ={this.state.age}></input>
        <p>Height</p><input id='height' onChange={this.handlerChange} placeholder='enter the height' value={this.state.height}></input>
        <button> Add Smurf</button>
    </form>
    )
  }
}

export default connect(null, { addingSmurf})(SmurfForm);
