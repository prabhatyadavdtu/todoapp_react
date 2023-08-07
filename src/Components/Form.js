import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';
const Form = (props) => {
    let [input, setInput] = useState('');
    let [isValid, setIsValid] = useState(true);

    function inputChangeHandler(e){
        setInput(e.target.value);
        if(input.trim().length>0){
            setIsValid(true);
        }
    }

    function formSubmitHandler(e){
        e.preventDefault();
        if(input.trim().length === 0){
            setIsValid(false);
            return;
        }
        const newTodo = {
            id : uuid(),
            todo : input,
            checked : false
        }
        props.addTodo(newTodo);
        //console.log(input);
        setInput('');
    }
    
  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type='text' placeholder='enter your task' value={input}/>
    </form>
  )
}

export default Form