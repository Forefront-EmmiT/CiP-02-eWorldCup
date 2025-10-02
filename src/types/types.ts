export interface Player {
  id: number;
  name: string;
}

export interface ValidationResult {
  isValid: boolean;
  errorMsg?: string;
}
