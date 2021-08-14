import { useState } from "react";
import { useDispatch } from "react-redux";

import { clearCompletedTodos } from "../../redux/todos.actions";

// import { connect } from "react-redux";
import TodoForm from "../../components/todo-form/todo-form.component";
import TodoList from '../../components/todo-list/todo-list.component';

function TaskApp(/* props */) {
  const [checkedTodos, setCheckedTodos] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event, todo) => {
    if (event.target.checked) {
      setCheckedTodos(checkedTodos.concat([todo])); // render
    } else {
      setCheckedTodos(checkedTodos.filter(checkedTodo => checkedTodo !== todo)); // render
    }
  };

  const handleClear = () => {
    // const clearTodos = props.clearTodos;
    // clearTodos(checkedTodos);

    // const dispatch = props.dispatch;
    dispatch(clearCompletedTodos(checkedTodos));

    setCheckedTodos([]);
  }

  return (
    <div>
      <TodoForm/>
      <TodoList handleChange={handleChange}/>
      <div>
        <button onClick={handleClear} disabled={checkedTodos.length === 0}>Clear completed todos</button>
        <span>({checkedTodos.length})</span>
      </div>
    </div>
  )
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    clearTodos: (checkedTodos) => dispatch({
      type: 'CLEAR_COMPLETED_TODOS',
      payload: checkedTodos,
    }) 
  }
} */

// export default connect(null, mapDispatchToProps)(TaskApp);

// export default connect()(TaskApp);
export default TaskApp;