import React from 'react';
import Todo from './Todo';

const List = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    props.filtered.map(todos => (
                        <Todo text={todos.text} key={todos.id} setTodo={props.setTodo} todo={props.todo} todos={todos} filtered={props.filtered} />
                    ))
                }
            </ul>
        </div>
    )
}

export default List;