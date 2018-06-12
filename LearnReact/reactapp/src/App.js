import { Component } from 'react';
import  React from 'react';
import Persons from './Persons/Persons'
import './App.css';
import Collapes from './collapse/collapse'

class App extends Component {
  sopmething = 'Vagish';
  state = {
    persons: [
      {name: 'Vagish', empid: 2390},
      {name: 'Mohan', empid: 1233},
      {name: 'raj', empid: 999},
    ]
  }

  switchNameHandler =  (switchname) => {
    // this.state.persons[0].name = 'Ram';
    this.setState({
      persons: [
        {name: switchname , empid: 1111},
        {name: 'Pyare', empid: 1233},
        {name: 'Kumar', empid: 999},
      ]
    })
  }

  changeNameHandler = event =>  {
    this.setState({
      persons: [
        {name: 'Ramu' , empid: 1111},
        {name: event.target.value , empid: 1233},
        {name: 'Kumar', empid: 999},
      ]
    })
  }

  toggleNameHandler = () => {
    const toggleFlag  = this.state.showPerson;
    this.setState({
      showPerson: !toggleFlag
    });
  }

  deleteHandler = (index)  => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }
  
  changeNameDynamicHandler = (id, event) => {

    const personIndex = this.state.persons.findIndex( (p) => {
      return p.empid === id ;
    });

    console.log(personIndex);

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons ] ;

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

    // console.log(event.target.value , id);
    // const persons = this.state.persons.filter((person) => {
    //   return person.id !== id
    // });

    // const filterPerson = [...persons, this.state.persons]
  }

  render() {
    // const classes = ['red bold' ].join();

    const classes = [];
    const buttonStyle = {
      backgroundColor: 'green',
      padding: '10px',
      border: 'none'
    }
    if(this.state.showPerson) {
      buttonStyle.backgroundColor = 'red';
    }

    if (this.state.persons.length < 2) {
      classes.push('yellow');
    } 

    return (
      <div className="App" className= {classes}>
        <h1>Hi I am a React App</h1>
        <button style = {buttonStyle} onClick = {this.toggleNameHandler }>Toogle Button</button>
        { this.state.showPerson ?
        <Persons 
          persons = {this.state.persons}
          dynamic = {this.deleteHandler}
          changed = {this.changeNameHandler}
          changedDynamic = {this.changeNameDynamicHandler}
          switchName = {this.switchNameHandler}
        />
         : null
      } 
      <Collapes />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi I am a React App'));
  }
}

export default App;
