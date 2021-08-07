import { Component } from "react";
import TodoForm from "../../components/todo-form/todo-form.component";
import TodoList from '../../components/todo-list/todo-list.component';

class TaskApp extends Component {

  state = {
    todos: [],
    checkedTodos: []
  }

  onNewTodo = (newTodo) => {
    const newTodoObj = {
      id: this.state.todos.length + 1,
      title: newTodo,
      createdDate: new Date(),
    }

    // setState function call is asynchronous (batched)
    // setting the new state of todos, which is dependent on the existing state of todos
    /* this.setState({
      todos: this.state.todos.concat([newTodoObj])
    }); */ // render()
    this.setState((prevState, prevProps) => {
      // function body
      // in place of `this.state` use `prevState`
      return {
        todos: prevState.todos.concat([newTodoObj]),
      }
    }); // render()
  }

  handleChange = (event, todo) => {
    if (event.target.checked) {
      this.setState((prevState) => {
        return {
          checkedTodos: prevState.checkedTodos.concat([todo])
        }
      }) // render
    } else {
      this.setState((prevState) => {
        return {
          checkedTodos: prevState.checkedTodos.filter(checkedTodo => checkedTodo !== todo)
        }
      }); // render
    }
  }

  handleClear = () => {
    this.setState((prevState) => {
      const { todos, checkedTodos } = prevState;
      return {
        checkedTodos: [],
        todos: todos.filter(todo => !checkedTodos.includes(todo))
      }
    }); // render
  }

  // lifecycle methods
  componentDidMount() {
    // called only once
    console.log('Task app --- componentDidMount()');
  }

  componentWillUnmount() {
    // called only once
    // perform cleanup
    console.log('Task app --- componentWillUnmount()');
  }

  // which is called by React at specific point(s) in the lifetime of the component
  // 1. Initial mounting
  // 2. setState from within the component
  // Lifecycle methods
  render() {
    console.log('Task app --- render()');
    return (
      <div>
        <TodoForm onNewTodo={this.onNewTodo}/>
        <TodoList todos={this.state.todos} handleChange={this.handleChange}/>
        <div>
          <button onClick={this.handleClear} disabled={this.state.checkedTodos.length === 0}>Clear completed todos</button>
          <span>({this.state.checkedTodos.length})</span>
        </div>
      </div>
    )
  }
}

export default TaskApp;