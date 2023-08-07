import React, { useState } from 'react'
import {BsTrashFill} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';

const Todo = ({deleteTodo, checkTodo, todoItem}) => {

  const [isChecked, setIsChecked] = useState(false);
  console.log(todoItem.id);
    function deleteTodoHandler(id){
        deleteTodo(id);
    }
    const inputChangeHandler = (id)=>{
      checkTodo(id);
    }

  

  return (
    <div>
        <li style={{textDecoration : `${todoItem.checked ? 'line-through' : ''}`}}>
            <input type='checkbox' onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={isChecked}/>
            <span>ID : {todoItem.id} --&gt; Task : {todoItem.todo} </span>
            <span><BiEdit/></span>
            <span onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span>            
        </li>
    </div>
  )
}

export default Todo