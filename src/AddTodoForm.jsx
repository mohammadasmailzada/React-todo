import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log('Event:', event);
    console.log('Todo Title from event:', event.target.elements.todoTitle.value);

    const todoTitle = event.target.elements.todoTitle.value;
    console.log('Todo Title:', todoTitle); 
    

    onAddTodo(todoTitle);
    
   
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="todoTitle"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
