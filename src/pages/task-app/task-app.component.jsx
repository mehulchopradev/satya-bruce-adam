import { Component } from "react";
import TodoForm from "../../components/todo-form/todo-form.component";
import TodoList from '../../components/todo-list/todo-list.component';

class TaskApp extends Component {

  state = {
    todos: [],
  }

  onNewTodo = (newTodo) => {
    const newTodoObj = {
      id: this.state.todos.length + 1,
      title: newTodo,
      createdDate: new Date(),
    }

    this.setState({
      todos: this.state.todos.concat([newTodoObj])
    }); // render()
  }

  render() {
    return (
      <div>
        <TodoForm onNewTodo={this.onNewTodo}/>
        <TodoList todos={this.state.todos}/>
        <div>
          <button>Clear completed todos</button>
          <span>(4)</span>
        </div>
      </div>
    )
  }
}

export default TaskApp;