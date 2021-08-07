import React, { useState } from 'react';

function TodoForm(props) {
  // returns an array
  // 1st element -> state variable
  // 2nd element -> function -> use this function to modify the state variable -> re render of the functional component
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    const v = event.target.value;
    setNewTodo(v); // render
  }

  const handleSave = () => {
    const onNewTodo = props.onNewTodo;
    onNewTodo(newTodo);

    setNewTodo(''); // render
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button disabled={!newTodo} onClick={handleSave}>Save</button>
    </div>
  )
}

export default React.memo(TodoForm);