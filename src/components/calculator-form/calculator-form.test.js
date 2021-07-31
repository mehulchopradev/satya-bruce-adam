import { render, screen } from '@testing-library/react';
import CalculatorForm from './calculator-form.component';

let comp;
let handleChange;
let handleAns;

describe('calculator-form test suite', () => {

  beforeEach(() => {
    // code runs before every test case in the current describe test suite
    handleChange = () => {}; // mock functions
    handleAns = () => {};

    comp = <CalculatorForm firstNo="50" secondNo="40" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>
  });

  // test cases
  test('it displays the passed in props in the respective gui elements', () => {
    // test steps
    render(comp);
    // screen.debug(); // debugging purpose in the test case

    // test assertions
    expect(screen.getByTestId('first')).toHaveValue('50');
    expect(screen.getByTestId('second')).toHaveValue('40');
    expect(screen.getByTestId('ans')).toHaveValue('90');
  });

  test('it enables/disables the button accordingly', () => {
    const obj = render(comp);

    expect(screen.getByTestId('calculate')).toBeEnabled();

    /* fireEvent.change(screen.getByTestId('first'), {
      target: { value: ''}
    }); */
    obj.rerender(<CalculatorForm firstNo="" secondNo="40" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>);
    expect(screen.getByTestId('calculate')).toBeDisabled();

    /* fireEvent.change(screen.getByTestId('first'), {
      target: { value: '89'}
    }); */
    obj.rerender(<CalculatorForm firstNo="89" secondNo="40" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>);
    expect(screen.getByTestId('calculate')).toBeEnabled();

    /* fireEvent.change(screen.getByTestId('second'), {
      target: { value: ''}
    }); */

    obj.rerender(<CalculatorForm firstNo="89" secondNo="" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>);
    expect(screen.getByTestId('calculate')).toBeDisabled();

    /* fireEvent.change(screen.getByTestId('second'), {
      target: { value: '89'}
    }); */
    obj.rerender(<CalculatorForm firstNo="89" secondNo="89" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>);
    expect(screen.getByTestId('calculate')).toBeEnabled();

    /* fireEvent.change(screen.getByTestId('first'), {
      target: { value: 'abc'}
    }); */
    obj.rerender(<CalculatorForm firstNo="abc" secondNo="89" ans="90" operation="+" handleChange={handleChange} handleAns={handleAns}/>);
    expect(screen.getByTestId('calculate')).toBeDisabled();
  });
});