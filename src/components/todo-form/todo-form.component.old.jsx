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
    this.setState({
      newTodo: '',
    });
  }

  componentDidMount() {
    console.log('Todo form --- componentDidMount()');
  }

  componentWillUnmount() {
    console.log('Todo form --- componentWillUnmount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // true, false
    // true -> render()
    // false -> not going to call render()
    // console.log('next state', nextState);
    // console.log('existing state', this.state);
    // lifecycle method is called before the render() can be called
    return nextState.newTodo !== this.state.newTodo;
  }

  render() {
    console.log('Todo form --- render()');
    return (
      <div>
        <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
        <button disabled={!this.state.newTodo} onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

export default TodoForm;