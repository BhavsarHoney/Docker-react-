// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Docker practice application', () => {
  render(<App />);

  expect(
    screen.getByText(/This is Docker Practice app/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /submit/i })
  ).toBeInTheDocument();
});
