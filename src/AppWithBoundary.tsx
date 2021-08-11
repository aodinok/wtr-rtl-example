import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { exampleStyle } from './styles.css.js';

function App() {
  return (
    <ErrorBoundary>
      <section>
        <h1 className={exampleStyle}>Hello world!</h1>
      </section>
      <ChildComponent />
    </ErrorBoundary>
  );
}

function ChildComponent() {
  
  return <div>{arguments.this_should_cause_error.length}</div>
}

export default App;
