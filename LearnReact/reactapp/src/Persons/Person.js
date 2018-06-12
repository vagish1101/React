import React from 'react';
import './Person.css';
export default (props) => {
    return(
        // <div onClick ={props.click}>
        <div>
            <p onClick ={props.dynamic_click}>I am {props.name} My emp id is {props.empid}</p>
            <p>{props.children}</p>
            <input type = "text"  onChange = {props.changeNameDynamic}/>  
            {/* <input type = "text"  onChange = {props.changeName}/>   */}
        </div>
    ) 
}

