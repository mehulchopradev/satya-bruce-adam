import './todo-list.styles.scss';
import TodoItem from '../todo-item/todo-item.component';

function TodoList(props) {
  const todos = props.todos;

  return (
    <div>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
      }
    </div>
  )
}

export default TodoList;