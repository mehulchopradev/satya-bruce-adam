import './todo-item.styles.scss';
import moment from 'moment';
import React from 'react';
import { capitalize } from '../../utils/string-utils';

function TodoItem(props) {
  const todo = props.todo;
  const handleChange = props.handleChange;
  console.log('TodoItem --- rendered()');

  return (
    <div>
      <input type="checkbox" name="" onClick={(event) => handleChange(event, todo)}/>
      <span data-testid="title">{capitalize(todo.title)}</span>
      <span data-testid="createdDate">({moment(todo.createdDate).format('MM/DD/YYYY')})</span>
    </div>
  )
}

export default React.memo(TodoItem);