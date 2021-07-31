import { render, screen } from '@testing-library/react';
import TodoList from './todo-list.component';

describe('todo-list test suite()', () => {
  test('it renders the todo list component', () => {
    const todos = [
      {
        id: 1,
        title: 'go for Shopping',
        createdDate: new Date(),
      },
      {
        id: 2,
        title: 'learn programming',
        createdDate: new Date(),
      }
    ];
    render(<TodoList todos={todos}/>);
    expect(screen.getByText('Go for shopping')).toBeInTheDocument();
    expect(screen.getByText('Learn programming')).toBeInTheDocument();
    // TODO: write expects for the createdDate too!
  });
});