import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {remainder} from './actions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  submitReminder() {
    console.log(this.props.remainder(this.state.text))
  }
  removeReminder() {
    debugger
    console.log(this.props.remainder(this.state.text))
  }
  render() {
    return (
      <div className="App">
        <div className="title">Remainder Prop</div>
        <div className="form-inline"  style = { {'textAlign': 'center'}}>
          <div className="form-group">
            <input 
              type="text"   
              onChange={event => this.setState({ text: event.target.value})}/>
          </div>
          <button 
            className="btn btn-success"
            onClick ={()=> this.submitReminder()} >
            Add Remainder
          </button>
          <button 
            className="btn btn-success"
            onClick ={()=> this.removeReminder()} >
            Remove Remainder
          </button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({remainder}, dispatch);
}
function mapStateToProps(state) {
  return {
    remainders:state
  }
}
export default connect(null, mapDispatchToProps)(App);
