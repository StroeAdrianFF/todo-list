import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('All');
  const [filtered, setFiltered] = useState([]);



  useEffect(() => {
    const getTodo = () => {
      if (localStorage.getItem('todo') === null) {
        localStorage.setItem('todo', JSON.stringify([]))
      } else {
        let localTodo = JSON.parse(localStorage.getItem('todo'))
        setTodo(localTodo);
      }
    }


    getTodo();
  }, [])


  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case 'completed':
          setFiltered(todo.filter(todos => todos.completed === true))
          break;
        case 'uncompleted':
          setFiltered(todo.filter(todos => todos.completed === false))
          break;
        default: setFiltered(todo);
      }
    }

    const save = () => {
      localStorage.setItem('todo', JSON.stringify(todo))
    }


    filteredHandler();
    save();
  }, [todo, status])






  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo} setStatus={setStatus} />
      <List todo={todo} setTodo={setTodo} filtered={filtered} />

    </div>
  );
}

export default App;
