import { useState } from "react";
import TodoForm from "../../components/todo-form/todo-form.component";
import TodoList from '../../components/todo-list/todo-list.component';

function TaskApp() {
  const [todos, setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const onNewTodo = (newTodo) => {
    const newTodoObj = {
      id: todos.length + 1,
      title: newTodo,
      createdDate: new Date(),
    }

    setTodos(todos.concat([newTodoObj])); //render
  };

  const handleChange = (event, todo) => {
    if (event.target.checked) {
      setCheckedTodos(checkedTodos.concat([todo])); // render
    } else {
      setCheckedTodos(checkedTodos.filter(checkedTodo => checkedTodo !== todo)); // render
    }
  };

  const handleClear = () => {
    setTodos(todos.filter(todo => !checkedTodos.includes(todo)))
    setCheckedTodos([]);
  }

  return (
    <div>
      <TodoForm onNewTodo={onNewTodo}/>
      <TodoList todos={todos} handleChange={handleChange}/>
      <div>
        <button onClick={handleClear} disabled={checkedTodos.length === 0}>Clear completed todos</button>
        <span>({checkedTodos.length})</span>
      </div>
    </div>
  )
}

export default TaskApp;