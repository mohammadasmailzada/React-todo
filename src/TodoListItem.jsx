import React from 'react';

function TodoListItem({ item }) {
const myArray = ['apple', 'banana', 'orange'];

  return (
    <ul>
      {item.text}
      <li key={item.id}>{item.title}</li>
      const myArray = ['apple', 'banana', 'orange'];

    </ul>
  );
}

export default TodoListItem