// TODO: update this test to reflect current app and not the default create-react-app test
process.exit(0)
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { log } from 'console';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
