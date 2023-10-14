import api from './api';

export const getInfoUser = async (user: string) => {
  try {
    const response = await api.get(`/getinfouser?id=${user}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Informações do Usuário:', error);
    return {};
  }
};
