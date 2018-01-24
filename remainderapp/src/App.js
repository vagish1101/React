import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addremainder } from './actions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  renderList() {
   
    return(
      <ul>
        <li>dasd</li>
      </ul>
    )
  }
  submitReminder() {
    this.props.addremainder(this.state.text);
    const { reminders } = this.props;
    debugger;
    console.log(reminders);
    console.log(this.props);
  }
  removeReminder() {
   // console.log(this.props.remainder(this.state.text))
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
          {this.renderList()}
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addremainder}, dispatch);
}
function mapStateToProps(state) {
  return {
    reminders:state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
