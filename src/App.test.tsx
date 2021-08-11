import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import App from './App';

describe('<App>', () => {
  it('throws error', () => {

    // Neither of this works

    // try {
    //  const { getByText } = render(<App />);
    //  const createAccount = getByText(/Hello world/i);
    //   expect(document.body.contains(createAccount));
    // } catch (err) {
    //   console.log('error catch successful')
    // }

    expect(() => render(<App />)).to.throw('error!');
  });
});
