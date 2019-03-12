import React from 'react';
import { render, fireEvent } from 'react-testing-library'; // added this
import 'jest-dom/extend-expect'; // added this

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const helpers = render(<App />);
    // console.log('helpers', helpers);
  });

  it('renders "Hello world"', () => {
    const { getByText } = render(<App />);

    const text = getByText(/hello world/i);

    expect(text).toBeInTheDocument();
  });

  // it('renders "Hello world"', () => {
  //   const { queryByText } = render(<App />);

  //   const text = queryByText(/hello world/i);

  //   expect(text).toBeTruthy();
  // });

  it('greets the team', () => {
    const { getByText} = render(<App />);

    const greetButton = getByText(/greet/i);

    fireEvent.click(greetButton);

    expect(getByText(/Hello Web XVI/i)).toBeInTheDocument();
  });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
