import { render, screen } from '@testing-library/react';

test('renders test text', () => {
  render(<div>Hello, test!</div>);
  expect(screen.getByText('Hello, test!')).toBeInTheDocument();
});
