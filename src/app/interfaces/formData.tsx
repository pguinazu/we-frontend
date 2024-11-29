export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  termsAccepted: boolean;
  phoneNumber: string;
  phoneCountryCode: string,
}

export interface LoginData {
  userEmail: string;
  password: string;
  rememberMe?: boolean;
}

