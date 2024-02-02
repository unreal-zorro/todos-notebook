import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('Render Hello world!', () => {
    render(<App />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
