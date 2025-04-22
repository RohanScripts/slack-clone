export interface SignupSubmittedData {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginSubmittedData {
  email: string;
  password: string;
}
