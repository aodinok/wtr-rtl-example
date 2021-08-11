import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { exampleStyle } from './styles.css.js';

function App({ initialSimulateError = false }: { initialSimulateError: boolean }) {
  const [simulateError, setSimulateError] = React.useState(initialSimulateError);
  return (
    <ErrorBoundary>
      <section>
        <h1 className={exampleStyle}>Hello world!</h1>
      </section>
      <button onClick={() => setSimulateError(true)}>Click me!</button>
      {simulateError && <ChildComponent />}
    </ErrorBoundary>
  );
}

function ChildComponent() {
  
  return <div>{arguments.this_should_cause_error.length}</div>
}

export default App;
