import type { ValidationResult } from '../types/types';

export const validateFormInput = (
  n: number,
  d: number,
  maxPlayers: number
): ValidationResult => {
  if (n % 2 !== 0) {
    return {
      isValid: false,
      errorMsg: 'Number of players must be even!',
    };
  }

  if (d < 1) {
    return {
      isValid: false,
      errorMsg: 'Round must be at least 1',
    };
  }

  if (d > n - 1) {
    return {
      isValid: false,
      errorMsg: 'Round must be less than number of players',
    };
  }

  if (n > maxPlayers) {
    return {
      isValid: false,
      errorMsg: `Maximum ${maxPlayers} players allowed`,
    };
  }

  return { isValid: true };
};
