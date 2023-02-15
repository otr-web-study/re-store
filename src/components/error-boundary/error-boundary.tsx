import { Component, PropsWithChildren } from "react";

import ErrorIndicator from "../error-indicator";

interface ErrorBoundaryState {
  hasError: boolean,
}

class ErrorBoundary extends Component<PropsWithChildren<{}>, ErrorBoundaryState> {

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }

}

export default ErrorBoundary;