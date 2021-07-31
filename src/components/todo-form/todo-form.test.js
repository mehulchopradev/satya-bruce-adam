import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './todo-form.component';

describe('todo-form() test suite', () => {
  test('it enables/disables the save button accordingly', () => {
    render(<TodoForm/>);
    expect(screen.getByRole('button')).toBeDisabled();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Todo 1'}
    });
    expect(screen.getByRole('button')).toBeEnabled();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: ''}
    });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('it sends out the newly created todo to the parent', () => {
    let newTodoText;
    const onNewTodo = (newTodo) => {
      newTodoText = newTodo;
    };

    render(<TodoForm onNewTodo={onNewTodo}/>);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Todo 1'}
    });
    fireEvent.click(screen.getByRole('button'));
    expect(newTodoText).toBe('Todo 1');

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Todo 2'}
    });
    fireEvent.click(screen.getByRole('button'));
    expect(newTodoText).toBe('Todo 2');
  });

  // TODO: 
  // test that tests whether the textbox gets cleared after Saving a particular todo
});