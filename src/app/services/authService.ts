import axios from 'axios';
import { SignUpForm } from "../interfaces/formData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const authService = {
  signUp: async (data: SignUpForm) => {
    const response = await axios.post(`${API_URL}/signup`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  login: async (data: { userEmail: string; password: string; rememberMe?: boolean }) => {
    const response = await axios.post(`${API_URL}/authenticate`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  loginWithGoogle: async () => `${API_URL}/oauth2/authorization/google`,
  loginWithFacebook: async () => `${API_URL}/oauth2/authorization/facebook`,
};
