import { render, screen, fireEvent } from '@testing-library/react';
import TaskApp from './task-app.component';

describe('task app test suite', () => {
  test('adding todo shows it in the list below', () => {
    render(<TaskApp/>);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo 1'}
    });
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getByText('Todo 1')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo 2'}
    });
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });

  test('enabling/disabling of Clear completed todos button', () => {
    render(<TaskApp/>);
    expect(screen.getAllByRole('button')[1]).toBeDisabled();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo 1'}
    });
    fireEvent.click(screen.getAllByRole('button')[0]);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo 2'}
    });
    fireEvent.click(screen.getAllByRole('button')[0]);

    fireEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('button')[1]).toBeEnabled();

    fireEvent.click(screen.getAllByRole('checkbox')[1]); // uncheck
    expect(screen.getAllByRole('button')[1]).toBeDisabled();
  });

  // TODO:
  // test to remove the completed todos from the list
  // test to verify the marked for clear todos counter
});