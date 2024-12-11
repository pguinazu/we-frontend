import { SignUpForm } from "../../interfaces/formData";
import api from '../api';

export const authService = {
  signUp: async (data: SignUpForm, setToken: (token: string | null) => void) => {
    const response = await api.post('/signup', data);
    setToken(response.data.id_token); // almacena token en contexto y cookies
    return response.data;
  },

  login: async (data: { username: string; password: string; rememberMe?: boolean }, 
   setToken: (token: string | null) => void) => {
    const response = await api.post('/authenticate', data);
    console.log(response.data.id_token);
    
    setToken(response.data.id_token);
    return response.data;
  },

  loginWithGoogle: async () => 'https://api-dev.we.asf.dev/oauth2/authorization/google',
  loginWithFacebook: async () => 'https://api-dev.we.asf.dev/oauth2/authorization/facebook',
};
