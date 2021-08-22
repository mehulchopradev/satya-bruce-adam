import { useState, useContext } from "react";
import TodoForm from "../../components/todo-form/todo-form.component.preredux";
import TodoList from '../../components/todo-list/todo-list.component';
import TodosContext from "../../context/todos.context";

function TaskApp() {
  // const [todos, setTodos] = useState([]);
  const existingTodos = useContext(TodosContext);
  const [todos, setTodos] = useState(existingTodos);

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
      <TodosContext.Provider value={todos}>
        <TodoList handleChange={handleChange}/>
      </TodosContext.Provider>
      <div>
        <button onClick={handleClear} disabled={checkedTodos.length === 0}>Clear completed todos</button>
        <span>({checkedTodos.length})</span>
      </div>
    </div>
  )
}

export default TaskApp;