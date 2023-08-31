import api from './api';
import {User} from '../types/typeAuthContext';

export const signInService = async (objectValues: User) => {
  const response = await api.post('/login', objectValues);
  return response.data;
};
