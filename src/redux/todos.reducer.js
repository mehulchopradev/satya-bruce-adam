const INITIAL_STATE = {
  todos: [],
};

const todosReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEW_TODO':
      const newTodo = action.payload;

      const newTodoObj = {
        id: currentState.todos.length + 1,
        title: newTodo,
        createdDate: new Date(),
      }
      return {
        ...currentState,
        todos: currentState.todos.concat([newTodoObj])
      }
    case 'CLEAR_COMPLETED_TODOS':
      const checkedTodos = action.payload;
      return {
        ...currentState,
        todos: currentState.todos.filter(todo => !checkedTodos.includes(todo))
      }
    default:
      return currentState;
  }
}

export default todosReducer;