import './calculator-form.styles.scss';

function CalculatorForm (props){
  const { firstNo, secondNo, ans, operation, handleChange, handleAns } = props;

  const handleClick = () => {
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

    handleAns(ans);
  };

  const isDisabled = !firstNo || !secondNo || isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));

  return (
    <div className='calculator-container'>
      <div className='row'>
        <input data-testid="first" type="text" name="firstNo" placeholder="enter the 1st no" value={firstNo} onChange={handleChange}/>
        <select name="operation" data-testid="operation" onChange={handleChange}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
        </select>
        <input data-testid="second" type="text" name="secondNo" placeholder="enter the 2nd no" value={secondNo} onChange={handleChange}/>
      </div>
      <div className='row'>
        <button data-testid="calculate" disabled={isDisabled} onClick={handleClick}>Calculate</button>
      </div>
      <div className='row'>
        <input data-testid="ans" type="text" name="ans" placeholder="here is the ans!" value={ans} readOnly/>
      </div>
    </div>
  )
}

export default CalculatorForm;