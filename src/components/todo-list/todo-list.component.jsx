import './todo-list.styles.scss';
import React, { useContext } from 'react';
import TodoItem from '../todo-item/todo-item.component';
import TodosContext from '../../context/todos.context';

// c1
function TodoList(props) {
  const handleChange = props.handleChange;
  const todos = useContext(TodosContext);

  /* return (
    <div>
      <TodosContext.Consumer>
        {
          todos => todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleChange={handleChange}/>)
        }
      </TodosContext.Consumer>
    </div>
  ) */

  return (
    <div>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleChange={handleChange}/>)
      }
    </div>
  )
}

export default TodoList;