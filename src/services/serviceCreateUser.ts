import api from './api';
import {createUserType} from '../types/typeCreateUser';
export const serviceCreateUser = async (objectValues: createUserType) => {
  const response = await api.post('/createuser', objectValues);
  return response.data;
};
