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
  username: string;
  password: string;
  rememberMe?: boolean;
}

