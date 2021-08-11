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
    console.log('catched', error)
    this.setState({
      error,
    });
  }

  render() {
    if (this.props.hasError || this.state.error) {
      console.log('rendering error')
      return JSON.stringify(this.state.error)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
