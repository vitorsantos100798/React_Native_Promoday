import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://ec2-100-25-142-212.compute-1.amazonaws.com:8080',
});

api.interceptors.request.use(
  async config => {
    const acessToken = await AsyncStorage.getItem('token');

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
