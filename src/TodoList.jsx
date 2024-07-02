import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  { id: 1, title: "Complete Your task" },
  { id: 2, title: "Buy a book" },
  { id: 3, title: "Go for a walk" },
];

function TodoList() {
  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} item={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
