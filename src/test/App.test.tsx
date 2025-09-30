// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect } from 'vitest';
// import App from '../App';

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