import { Component } from 'react';

class ErrorHelper extends Component {

  state = {
    errorMessage: null,
  }

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.message
    }; // render
  }

  componentDidCatch(error, errorInfo) {
    // send this to the external logging service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <h2>Something went wrong. Please try again later</h2>
      )
    }

    return this.props.children;
  }
}

export default ErrorHelper;