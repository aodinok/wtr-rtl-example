import React from 'react';


interface Props {
  children?: React.ReactNode;
  /**
   * In which page/element did the error occur
   */
  location?: string | undefined;
  /**
   * Optional prop for forcing an error (when not thrown automatically through something like render)
   */
  hasError?: boolean | undefined;
  /**
   * Optional prop for if the ErrorBoundary is rendered on a dark background; inverts text colors
   */
  hasDarkBackground?: boolean | undefined;
}

interface State {
  error: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    });
  }

  render() {
    const { hasDarkBackground } = this.props;

    if (this.props.hasError || this.state.error) {
      return JSON.stringify(this.state.error)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
