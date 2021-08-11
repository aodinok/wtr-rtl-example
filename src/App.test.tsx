import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';

// import App from './App';
import App from './AppWithBoundary';

describe('<App>', () => {
  it('renders without error', () => {
    render(<App initialSimulateError={false} />)
    expect(screen.getByRole('button')).not.to.eql('null');
  });

  it('throws error', () => {

    // Neither of this works

    // try {
    //  const { getByText } = render(<App />);
    //  const createAccount = getByText(/Hello world/i);
    //   expect(document.body.contains(createAccount));
    // } catch (err) {
    //   console.log('error catch successful')
    // }

    expect(() => render(<App initialSimulateError={false} />)).to.throw();
  });
});
