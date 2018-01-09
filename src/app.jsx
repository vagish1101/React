import React, { Component, PureComponent }  from 'react';
import Clock from './clock.jsx';
//console.log(PureComponent);

// module.exports  = 'PureComponent';

class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            deadline: 'january 11, 2018',
            newDeadline: ''
        }
    }
  
    render() {
        return (
            <div className="App">
                CountDount to {this.state.deadline}
                <Clock deadline = {this.state.deadline} />
                <input 
                    type = "text" 
                    onChange = {event => this.setState({newDeadline: event.target.value})}
                />
                <button onClick = { () => {this.setState({deadline: this.state.newDeadline})}} >Submit</button>
            </div>
        )
    } 
}

export default App;
