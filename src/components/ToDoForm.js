import React, {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value
        : '');
        //so that when you click edit, the value remains in the box for you to edit

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()

    })

    const handleChange = event => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            //to ensure there's only a 1 in 10000 chance that the id would be replicated
            text: input
        });

        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text" 
                        placeholder="Update your item" 
                        value={input} 
                        name="text" 
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input 
                        type="text" 
                        placeholder="Add a todo" 
                        value={input} 
                        name="text" 
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                </>
            )}
        </form>
    );
}

export default ToDoForm
