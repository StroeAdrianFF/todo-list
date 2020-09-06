import React from 'react';


const Form = (props) => {

    const inputTextHandler = (event) => {
        props.setInputText(event.target.value)
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        props.setTodo([
            ...props.todo,
            {
                text: props.inputText,
                completed: false,
                id: Math.random() * 250
            }
        ]);
        props.setInputText('')
    }

    const statusHandler = (event) => {
        props.setStatus(event.target.value)
    }


    return (
        <form>
            <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default Form