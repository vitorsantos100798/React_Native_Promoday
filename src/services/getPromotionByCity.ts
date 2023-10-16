import api from './api';

export const getPromotionByCity = async (city: string) => {
  try {
    const response = await api.get(`/getpromotion?city=${city}`);
    return response.data;
  } catch (error) {
    // console.error('Erro ao buscar promoção por cidade:', error);
    return {};
  }
};
