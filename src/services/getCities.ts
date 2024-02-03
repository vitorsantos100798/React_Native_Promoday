import axios from 'axios';

export const getCities = async () => {
  try {
    const response = await axios.get(
      'http://ec2-100-25-142-212.compute-1.amazonaws.com:8080/getcities',
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
