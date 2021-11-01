import React, {useState} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Add a todo" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange}
            />
            <button className="todo-button">Add todo</button>

        </form>
    )
}

export default ToDoForm
