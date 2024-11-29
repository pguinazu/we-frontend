import axios from 'axios';
import { FormData } from "../interfaces/formData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-dev.we.asf.dev/api';

export const authService = {
  signUp: async (data: FormData) => {
    const response = await axios.post(`${API_URL}/signup`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  login: async (data: { username: string; password: string; rememberMe: boolean }) => {
    const response = await axios.post(`${API_URL}/authenticate`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },

  loginWithGoogle: async () => `${API_URL}/oauth2/authorization/google`,
  loginWithFacebook: async () => `${API_URL}/oauth2/authorization/facebook`,
};
