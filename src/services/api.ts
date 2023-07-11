import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8080',
});

api.interceptors.request.use(
  async config => {
    const acessToken = await AsyncStorage.getItem('@accessToken');

    if (acessToken) {
      api.defaults.headers.common.authorization = `${acessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
