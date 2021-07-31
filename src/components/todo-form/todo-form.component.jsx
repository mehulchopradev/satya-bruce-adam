import { Component } from 'react';
import './todo-form.styles.scss';

class TodoForm extends Component {

  state = {
    newTodo: '',
  }

  handleChange = (event) => {
    const v = event.target.value;
    this.setState({
      newTodo: v,
    }); // render()
  }

  handleSave = () => {
    const onNewTodo = this.props.onNewTodo;
    const newTodo = this.state.newTodo;
    onNewTodo(newTodo);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button disabled={!this.state.newTodo} onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

export default TodoForm;