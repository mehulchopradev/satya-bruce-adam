import { Component } from "react";
import axios from "axios";
import CalculatorForm from "../../components/calculator-form/calculator-form.component"
import LiveAlgebraicExpression from "../../components/live-algebraic-expression/live-algebraic-expression.component";

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

class CalculatorApp extends Component {

  // initial state of the component
  state = {
    firstNo: '',
    secondNo: '',
    ans: '',
    operation: '',
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

  async componentDidMount() {
    const response = await axios.get(url); // asynchronous IO
    const data = response.data;
    this.setState(data); // render
  }

  componentWillUnmount() {
    // code to releease resources / clear up things
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