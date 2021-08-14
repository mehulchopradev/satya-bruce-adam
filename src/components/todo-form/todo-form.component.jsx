import React, { useState } from 'react';

import { createNewTodo } from '../../redux/todos.actions';

// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

function TodoForm(props) {
  // returns an array
  // 1st element -> state variable
  // 2nd element -> function -> use this function to modify the state variable -> re render of the functional component
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const v = event.target.value;
    setNewTodo(v); // render
  }

  const handleSave = () => {
    // const onNewTodo = props.onNewTodo;
    // onNewTodo(newTodo);

    // const dispatch = props.dispatch;
    dispatch(createNewTodo(newTodo));

    setNewTodo(''); // render
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button disabled={!newTodo} onClick={handleSave}>Save</button>
    </div>
  )
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    onNewTodo: (newTodo) => dispatch({
      type: 'NEW_TODO',
      payload: newTodo,
    }) 
  }
} */

// redux is automatically going to pass a dispatch function as a prop to the connect component
// export default connect()(TodoForm);
export default TodoForm;