import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid';
const TodoApp = () => {

    // let arrayDummy = [
    //     {
    //         id:uuid(),
    //         todo:'code karo',
    //         checked : false
    //     },
    //     {
    //         id:uuid(),
    //         todo:'maze karo',
    //         checked : false
    //     },
    //     {
    //         id:uuid(),
    //         todo:'video upload karo',
    //         checked : false
    //     },
    //     {
    //         id:uuid(),
    //         todo:'practice karo',
    //         checked : false
    //     },
    //     {
    //         id:uuid(),
    //         todo:'code push karo',
    //         checked : false
    //     }
    // ]
    let arrayDummy = JSON.parse(window.localStorage.getItem('todos') || "[]");
    
    let [todos, setTodos] = useState(arrayDummy);

    const addTodo = (todo)=>{
        setTodos([...todos, todo])
    }
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])
    
    const deleteTodo = (id)=>{
        const newTodo = todos.filter((todo)=>todo.id !== id);
        setTodos(newTodo);
    }

    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=>item.id === id ? {...item, checked : !item.checked} : item)
        });
    }    

  return (
    <div>
        <h1 style={{textAlign : 'center'}}>Todo List for Prabhat Kumar</h1>
        <Form addTodo={addTodo} todos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  )
}

export default TodoApp