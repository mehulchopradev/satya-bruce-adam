import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorForm from './calculator-form.component';

describe('calculator-form test suite', () => {
  // test cases
  test('it displays the passed in props in the respective gui elements', () => {
    // test steps
    render(<CalculatorForm firstNo="50" secondNo="40" ans="90"/>);
    // screen.debug(); // debugging purpose in the test case

    // test assertions
    expect(screen.getByTestId('first')).toHaveValue('50');
    expect(screen.getByTestId('second')).toHaveValue('40');
    expect(screen.getByTestId('ans')).toHaveValue('90');
  });

  test('it enables/disables the button accordingly', () => {
    render(<CalculatorForm firstNo="50" secondNo="40" ans="90"/>);

    expect(screen.getByTestId('calculate')).toBeEnabled();

    fireEvent.change(screen.getByTestId('first'), {
      target: { value: ''}
    });
    expect(screen.getByTestId('calculate')).toBeDisabled();

    fireEvent.change(screen.getByTestId('first'), {
      target: { value: '89'}
    });
    expect(screen.getByTestId('calculate')).toBeEnabled();

    fireEvent.change(screen.getByTestId('second'), {
      target: { value: ''}
    });
    expect(screen.getByTestId('calculate')).toBeDisabled();

    fireEvent.change(screen.getByTestId('second'), {
      target: { value: '89'}
    });
    expect(screen.getByTestId('calculate')).toBeEnabled();

    fireEvent.change(screen.getByTestId('first'), {
      target: { value: 'abc'}
    });
    expect(screen.getByTestId('calculate')).toBeDisabled();
  });

  test('it performs the calculation appropriately', () => {
    render(<CalculatorForm firstNo="50" secondNo="40" ans="90"/>);

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
});