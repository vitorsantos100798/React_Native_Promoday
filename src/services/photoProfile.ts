import api from './api';

export const photoProfileService = async (objectValues: any) => {
  try {
    const response = await api.post('/profileImage', objectValues);
    return response.data;
  } catch (error) {
    console.error('Erro ao Atualizar a Foto de Perfil', error);
    return {
      error: String(error.response.data),
    };
  }
};
