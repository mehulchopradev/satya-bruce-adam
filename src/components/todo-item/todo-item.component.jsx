import './todo-item.styles.scss';
import moment from 'moment';
import { capitalize } from '../../utils/string-utils';

function TodoItem(props) {
  const todo = props.todo;

  return (
    <div>
      <input type="checkbox" name=""/>
      <span data-testid="title">{capitalize(todo.title)}</span>
      <span data-testid="createdDate">({moment(todo.createdDate).format('MM/DD/YYYY')})</span>
    </div>
  )
}

export default TodoItem;