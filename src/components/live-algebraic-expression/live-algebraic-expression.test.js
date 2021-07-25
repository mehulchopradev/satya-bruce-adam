import { render, screen } from '@testing-library/react';
import LiveAlgebraicExpression from './live-algebraic-expression.component';

describe('live algebraic expression test suite', () => {
  test('it renders the expression based on passed in props', () => {
    render(<LiveAlgebraicExpression firstNo='6' secondNo='4' operation='-' ans='2'/>);

    expect(screen.getByTestId('expression')).toHaveTextContent('6 - 4 = 2');
  });

  test('it shows the expression since the props are passed', () => {
    const { rerender } = render(<LiveAlgebraicExpression firstNo='6' secondNo='4' operation='-' ans='2'/>);
    expect(screen.getByTestId('expression')).toBeInTheDocument();

    rerender(<LiveAlgebraicExpression firstNo='' secondNo='4' operation='-' ans='2'/>);
    expect(screen.queryByTestId('expression')).not.toBeInTheDocument();

    rerender(<LiveAlgebraicExpression firstNo='10' secondNo='' operation='-' ans='2'/>);
    expect(screen.queryByTestId('expression')).not.toBeInTheDocument();
  });
})