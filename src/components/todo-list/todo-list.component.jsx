import './todo-list.styles.scss';
import React from 'react';
import TodoItem from '../todo-item/todo-item.component';

function TodoList(props) {
  const todos = props.todos;
  const handleChange = props.handleChange;
  console.log('TodoList --- rendered');

  return (
    <div>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleChange={handleChange}/>)
      }
    </div>
  )
}

export default React.memo(TodoList);