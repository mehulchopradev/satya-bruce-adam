import { useState, useEffect } from "react";
import axios from "axios";
import CalculatorForm from "../../components/calculator-form/calculator-form.component";
import LiveAlgebraicExpression from "../../components/live-algebraic-expression/live-algebraic-expression.component";

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

function CalculatorApp() {
  const [defaultCalcData, setDefaultCalcData] = useState({
    firstNo: '',
    secondNo: '',
    operation: '',
    ans: '',
  });

  const { firstNo, secondNo, operation, ans } = defaultCalcData;

  useEffect(() => {
    // side effect code
    const fetchDefaultCalcData = async () => {
      const response = await axios.get(url); // asynchronous IO
      const data = response.data;
      setDefaultCalcData(data); //render
    }
    fetchDefaultCalcData();
  }, []); // will run only once when the component is mounted

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    setDefaultCalcData({
      ...defaultCalcData,
      [name]: value
    }); // render
  };

  const handleAns = (ans) => {
    setDefaultCalcData({
      ...defaultCalcData,
      ans,
    }); //render
  };

  return (
    <>
      <CalculatorForm
        firstNo={firstNo}
        secondNo={secondNo}
        ans={ans}
        operation={operation}
        handleChange={handleChange}
        handleAns={handleAns}  
      />

      <LiveAlgebraicExpression
        firstNo={firstNo}
        secondNo={secondNo}
        operation={operation}
        ans={ans}
      />
    </>
  )
}

export default CalculatorApp;