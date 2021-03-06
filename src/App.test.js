import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "Hello World" message', () => {
  const { getByText } = render(<App />);
  const helloMessage = getByText(/hello world/i);
  expect(helloMessage).toBeInTheDocument();
});
