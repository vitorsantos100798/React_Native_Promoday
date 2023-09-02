import api from './api';

export const registerPromotionService = async (objectValues: any) => {
  const response = await api.post('/newpromotion', objectValues);
  return response.data;
};
