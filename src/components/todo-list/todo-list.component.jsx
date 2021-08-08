import './todo-list.styles.scss';
import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoItem from '../todo-item/todo-item.component';

// c1
function TodoList(props) {
  // const todos = props.todos;
  const todos = useSelector((state) => state.todosReducer.todos);
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

/* const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos,
  }
} */

// export default connect(mapStateToProps)(TodoList)
export default TodoList;