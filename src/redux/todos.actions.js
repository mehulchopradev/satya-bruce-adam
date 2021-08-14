import TODO_ACTION_TYPES from "./todos.types"

// action object creator functions

export function createNewTodo(newTodo) {
  return {
    type: TODO_ACTION_TYPES.NEW_TODO,
    payload: newTodo,
  }
}

export function clearCompletedTodos(completedTodos) {
  return {
    type: TODO_ACTION_TYPES.CLEAR_COMPLETED_TODOS,
    payload: completedTodos,
  }
}