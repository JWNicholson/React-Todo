import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          item={todo}
          togglePurchased={props.toggleCompleted}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;