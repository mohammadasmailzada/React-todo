import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.todoTitle.value;
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" name="todoTitle" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
