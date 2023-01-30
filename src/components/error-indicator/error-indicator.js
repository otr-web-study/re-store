import './error-indicator.css';

const ErrorIndicator = ( { error='' }) => {

  return (
    <h2>{`Some error! ${error}`}</h2>
  );
}

export default ErrorIndicator;