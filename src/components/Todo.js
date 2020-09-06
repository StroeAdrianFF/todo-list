import React from 'react'

const Todo = (props) => {

    const deleteTodoHandler = () => {
        props.setTodo(props.todo.filter(el => el.id !== props.todos.id))

    }

    const completeTodoHandler = () => {
        props.setTodo(props.todo.map(item => {
            if (item.id === props.todos.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }
        ))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todos.completed ? "completed" : ''}`}>{props.text}</li>
            <button className="complete-btn" onClick={completeTodoHandler}><i className="fas fa-check" ></i></button>
            <button className="trash-btn" onClick={deleteTodoHandler}><i className="fas fa-trash" ></i></button>
        </div>
    )
}

export default Todo
