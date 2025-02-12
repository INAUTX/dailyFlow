import axios from 'axios';

//  pasar el dominio a .env
const instance = axios.create({
  baseURL: 'Dominio', 
});

export const AuthAPI = {
  async login(email: string, password: string) {
    const response = await instance.post('/auth/login', { email, password });
    return response.data; 
    // { access_token, refresh_token, userId }
  },

  async register(nombre: string, email: string, password: string) {
    const response = await instance.post('/auth/register', { nombre, email, password });
    return response.data;
    // { message, userId }
  },

  async refreshToken(userId: number, refreshToken: string) {
    const response = await instance.post('/auth/refresh', { userId, refreshToken });
    return response.data;
    // { access_token, refresh_token }
  },
};
