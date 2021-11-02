import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo';

function ToDoList() {
    const [todos, setTodos] = useState([])

        
    const addTodo = todo => {
        // if a letter is not typed in, nothing will appear
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };
    const removeTodo = id => {
        //checks the to do and removes it
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }


    const completeTodo = id => {
        //toggle between completed and not (true/false)
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete 
            }
            return todo
        });
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1>What's the plan for Today?</h1>      
            <ToDoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}

                />
                
        </div>
    )
}

export default ToDoList
