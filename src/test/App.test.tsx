import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

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
