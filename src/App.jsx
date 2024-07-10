import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (todoTitle) => {
    setNewTodo(todoTitle);
  };

  return (
    <>
   
      <TodoList />
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>New Todo: {newTodo}</p>
    </>
  );
}

export default App;
