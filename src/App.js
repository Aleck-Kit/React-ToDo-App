import React from 'react'
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
    return (
        <div className="todo-app">
            <ToDoList />
            <ToDoForm/>
        </div>
    )
}

export default App

