import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

// describe('App', () => {
//   it('renders Vite + React heading', () => {
//     render(<App />);
//     const heading = screen.getByText('Vite + React');
//     expect(heading).toBeInTheDocument();
//   });

//   it('displays initial count of 0', () => {
//     render(<App />);
//     const button = screen.getByRole('button');
//     expect(button).toHaveTextContent('count is 0');
//   });

//   it('increments count when button is clicked', () => {
//     render(<App />);
//     const button = screen.getByRole('button');

//     fireEvent.click(button);
//     expect(button).toHaveTextContent('count is 1');

//     fireEvent.click(button);
//     expect(button).toHaveTextContent('count is 2');
//   });

//   it('renders both Vite and React logos', () => {
//     render(<App />);
//     const viteLogo = screen.getByAltText('Vite logo');
//     const reactLogo = screen.getByAltText('React logo');

//     expect(viteLogo).toBeInTheDocument();
//     expect(reactLogo).toBeInTheDocument();
//   });
// });

describe('App', () => {
  it('should show "Alice vs Charlie" when n=6 and d=2', () => {
    render(<App />);

    const playersInput = screen.getByTestId('players-input');
    const roundsInput = screen.getByTestId('rounds-input');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(playersInput, { target: { value: '6' } });
    fireEvent.change(roundsInput, { target: { value: '2' } });

    fireEvent.click(submitButton);

    expect(screen.getByText('Alice vs. Charlie')).toBeTruthy();
  });
});
