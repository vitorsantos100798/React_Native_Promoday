import api from './api';
import {typeSignInService} from '../types/typeSignInService';
export const signInService = async ({email, password}: typeSignInService) => {
  const response = await api.post('/login', {
    email: email,
    password: password,
  });
  return response.data;
};
