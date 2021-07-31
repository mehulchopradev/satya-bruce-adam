import { render, screen } from '@testing-library/react';
import TodoItem from './todo-item.component';
import moment from 'moment';

describe('todo-item test suite', () => {
  test('it renders the todo item component', () => {
    const todo = {
      title: 'Todo 1',
      createdDate: new Date(),
    }
    render(<TodoItem todo={todo}/>);
    
    expect(screen.getByTestId('title')).toHaveTextContent('Todo 1');

    const today = moment();
    const expectedValue = `(${today.format('MM/DD/YYYY')})`;
    expect(screen.getByTestId('createdDate')).toHaveTextContent(expectedValue);
  });

  test('it renders the todo item component with capitalized todo title', () => {
    const todo = {
      title: 'go for Shopping',
      createdDate: new Date(),
    }
    render(<TodoItem todo={todo}/>);
    
    expect(screen.getByTestId('title')).toHaveTextContent('Go for shopping');

    const today = moment();
    const expectedValue = `(${today.format('MM/DD/YYYY')})`;
    expect(screen.getByTestId('createdDate')).toHaveTextContent(expectedValue);
  });
});