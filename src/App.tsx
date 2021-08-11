import React from 'react';
import { exampleStyle } from './styles.css.js';

function App() {
  throw new Error('error!')
  return (
    <section>
      <h1 className={exampleStyle}>Hello world!</h1>
    </section>
  );
}

export default App;
