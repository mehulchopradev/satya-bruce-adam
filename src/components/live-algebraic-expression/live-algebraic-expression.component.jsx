import './live-algebraic-expression.styles.scss';

function LiveAlgebraicExpression(props) {
  const { firstNo, secondNo, operation, ans } = props;

  return (
    <div>
      <p>Live algebraic expression</p>
      {
        (!firstNo || !secondNo) ? null : (<p data-testid='expression'>{firstNo} {operation} {secondNo} = {ans}</p>)
      }
    </div>
  )
}

export default LiveAlgebraicExpression;