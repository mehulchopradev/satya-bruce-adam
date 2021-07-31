import { render, screen, fireEvent } from '@testing-library/react'
import CalculatorApp from './calculator-app.component';

describe('calculator app test suite', () => {
  test('it performs the calculation appropriately', () => {
    render(<CalculatorApp/>);

    fireEvent.change(screen.getByTestId('first'), {
      target: { value: '60'}
    });
    fireEvent.change(screen.getByTestId('second'), {
      target: { value: '50'}
    });
    fireEvent.click(screen.getByTestId('calculate'));
    expect(screen.getByTestId('ans')).toHaveValue('110');

    fireEvent.change(screen.getByTestId('operation'), {
      target: { value: '-'}
    });
    fireEvent.click(screen.getByTestId('calculate'));
    expect(screen.getByTestId('ans')).toHaveValue('10');
  });

  test('it shows live expression update when changing the calculator fields', () => {
    render(<CalculatorApp/>);

    fireEvent.change(screen.getByTestId('first'), {
      target: { value: '130'}
    });

    expect(screen.getByTestId('expression')).toBeInTheDocument();
    expect(screen.getByTestId('expression')).toHaveTextContent('130 + 10 = 30');

    fireEvent.change(screen.getByTestId('second'), {
      target: { value: '100'}
    });

    expect(screen.getByTestId('expression')).toBeInTheDocument();
    expect(screen.getByTestId('expression')).toHaveTextContent('130 + 100 = 30');

    fireEvent.click(screen.getByTestId('calculate'));
    expect(screen.getByTestId('expression')).toBeInTheDocument();
    expect(screen.getByTestId('expression')).toHaveTextContent('130 + 100 = 230');
  });

  // TODO:
  // test which tests for visibility and invisibility of `expression` in live algebraic expression component,
  // when clearing out firstno/secondno field in calculator-form component
});