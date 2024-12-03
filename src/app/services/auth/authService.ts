import axios from 'axios';
import { SignUpForm } from "../../interfaces/formData";

const api = '/api';
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api-dev.we.asf.dev';

export const authService = {
  signUp: async (data: SignUpForm) => {
    const response = await axios.post(`${API_URL}${api}/signup`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  login: async (data: { username: string; password: string; rememberMe?: boolean }) => {
    const response = await axios.post(`${API_URL}${api}/authenticate`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  loginWithGoogle: async () => `${API_URL}/oauth2/authorization/google`,
  loginWithFacebook: async () => `${API_URL}/oauth2/authorization/facebook`,
};
