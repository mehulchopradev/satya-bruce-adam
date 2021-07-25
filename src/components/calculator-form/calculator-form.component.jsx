import './calculator-form.styles.scss';
import { Component } from 'react';

class CalculatorForm extends Component {
  // gets a property called as `props`
  // get a property called as `state`

  // initial state of the component
  state = {
    firstNo: this.props.firstNo,
    secondNo: this.props.secondNo,
    ans: this.props.ans,
    operation: '+',
  }

  // in class level components, event handlers to be defined using es6 arrow syntax
  handleClick = () => {
    const { firstNo, secondNo, operation } = this.state;

    const ifirstNo = parseInt(firstNo);
    const isecondNo = parseInt(secondNo);

    let ans;
    switch (operation) {
      case '+': ans = ifirstNo + isecondNo;
        break;
      case '-': ans = ifirstNo - isecondNo;
        break;
      default: ans = ifirstNo * isecondNo;
        break;
    }

    this.setState({
      ans,
    }); // render()
  }

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    // always update internal state using this.setState()
    this.setState({
      [name]: value,
    }); // re render the GUI -> again call internally the render()
  }

  render() {
    const { firstNo, secondNo } = this.state;
    const isDisabled = !firstNo || !secondNo || isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));

    return (
      <div className='calculator-container'>
        <div className='row'>
          <input data-testid="first" type="text" name="firstNo" placeholder="enter the 1st no" value={this.state.firstNo} onChange={this.handleChange}/>
          <select name="operation" data-testid="operation" onChange={this.handleChange}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
          </select>
          <input data-testid="second" type="text" name="secondNo" placeholder="enter the 2nd no" value={this.state.secondNo} onChange={this.handleChange}/>
        </div>
        <div className='row'>
          <button data-testid="calculate" disabled={isDisabled} onClick={this.handleClick}>Calculate</button>
        </div>
        <div className='row'>
          <input data-testid="ans" type="text" name="ans" placeholder="here is the ans!" value={this.state.ans} readOnly/>
        </div>
    </div>
    )
  }
}


/* function CalculatorForm (props) {
  const handleClick = () => {
    // get the value of first no from the internal component "state"  -> convert to int
    // get the value of second no from the internal component "state"  -> convert to int
    // get the operation from the internal component "state"

    // perform calculation
    // set the calculated value on the internal component "state" 
  };

  return (
    <div className='calculator-container'>
      <div className='row'>
        <input type="text" name="" placeholder="enter the 1st no" defaultValue={props.firstNo}/>
        <select name="">
          <option>+</option>
          <option>-</option>
          <option>*</option>
        </select>
        <input type="text" name="" placeholder="enter the 2nd no" defaultValue={props.secondNo}/>
      </div>
      <div className='row'>
        <button onClick={handleClick}>Calculate</button>
      </div>
      <div className='row'>
        <input type="text" name="" placeholder="here is the ans!" defaultValue={props.ans} readOnly/>
      </div>
    </div>
  )
} */

export default CalculatorForm;