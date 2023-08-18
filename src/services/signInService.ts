import api from './api';
import {typeSignInService} from '../types/typeSignInService';
export const signInService = async (objectValues: typeSignInService) => {
  const response = await api.post('/login', objectValues);
  return response.data;
};
