import React from 'react';
import Person from './Person';
const Persons = (props) => {
    return (
        <div>
            <button onClick = { () =>  props.switchName('Jitu') }>Switch Name</button>
            {
              props.persons.map((person, index)=> {
                return  <Person 
                        name = {person.name}
                        empid = {person.name.empid}
                        changeName = {props.changed}
                        dynamic_click = {props.dynamic}
                        changeNameDynamic = {props.changedDynamic.bind(this,  person.empid)}
                      //  changeNameDynamic = { event=>  {this.changeNameDynamicHandler(event, person.empid) } }
                        />
                })
          }
          {
          /*<Person 
            name = {this.state.persons[0].name}  
            empid = {this.state.persons[0].empid}
            click = {this.switchNameHandler.bind(this, 'Jitendra')} >Working in Teksystems</Person>
          <Person 
            name = {this.state.persons[1].name}  
            empid = {this.state.persons[1].empid}
            changeName = {this.changeNameHandler}
            />
          <Person 
            name = {this.state.persons[2].name}  
            empid = {this.state.persons[2].empid} >Working in Teksystems
          </Person> */}
        </div> 
    )
}

export default Persons