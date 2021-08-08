import { useState, useEffect } from "react";
import axios from "axios";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import CalculatorForm from "../../components/calculator-form/calculator-form.component";
import LiveAlgebraicExpression from "../../components/live-algebraic-expression/live-algebraic-expression.component";

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

function CalculatorApp(/* props */) {
  const [defaultCalcData, setDefaultCalcData] = useState({
    firstNo: '',
    secondNo: '',
    operation: '',
    ans: '',
  });

  const todos = useSelector((state) => state.todosReducer.todos.slice(0, 3));

  const { firstNo, secondNo, operation, ans } = defaultCalcData;

  useEffect(() => {
    // side effect code
    const fetchDefaultCalcData = async () => {
      const response = await axios.get(url); // asynchronous IO
      const data = response.data;
      setDefaultCalcData(data); //render
    }
    fetchDefaultCalcData();

    return () => {
      // will run just before the component will unmount
      // its like the componentWillUnmount life cycle method
      console.log('Clearing up... component');
    }
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

      <h2>Top 3 todos</h2>
      {
        todos.map(todo => <div key={todo.id}>{todo.title}</div>)
      }
    </>
  )
}

/* const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos.slice(0, 3)
  }
} */

// export default connect(mapStateToProps)(CalculatorApp);
export default CalculatorApp;