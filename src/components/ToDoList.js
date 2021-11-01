import React, {useState} from 'react';
import ToDoForm from '../ToDoForm';


function ToDoList() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>What's the plan for Today?</h1>      
            <ToDoForm/>
        </div>
    )
}

export default ToDoList
