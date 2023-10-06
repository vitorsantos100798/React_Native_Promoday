import api from './api';

export const getCupons = async () => {
  try {
    const response = await api.get('/getcupons');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
