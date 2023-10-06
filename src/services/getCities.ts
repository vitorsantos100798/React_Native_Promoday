import api from './api';

export const getCities = async () => {
  try {
    const response = await api.get('/getcities');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
