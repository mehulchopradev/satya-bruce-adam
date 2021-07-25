import { Component } from "react";
import CalculatorForm from "../../components/calculator-form/calculator-form.component"
import LiveAlgebraicExpression from "../../components/live-algebraic-expression/live-algebraic-expression.component";

class CalculatorApp extends Component {

  // initial state of the component
  state = {
    firstNo: '20',
    secondNo: '10',
    ans: '30',
    operation: '+',
  }

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    // always update internal state using this.setState()
    this.setState({
      [name]: value,
    }); // re render the GUI -> again call internally the render()
  }

  handleAns = (ans) => {
    this.setState({
      ans: ans,
    }) // render
  }

  render() {
    return (
      <>
        <CalculatorForm
          firstNo={this.state.firstNo}
          secondNo={this.state.secondNo}
          ans={this.state.ans}
          operation={this.state.operation}
          handleChange={this.handleChange}
          handleAns={this.handleAns}  
        />

        <LiveAlgebraicExpression
          firstNo={this.state.firstNo}
          secondNo={this.state.secondNo}
          operation={this.state.operation}
          ans={this.state.ans}
        />
      </>
    )
  }
}

export default CalculatorApp;