import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }) => {
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
};

export default TodoList;
