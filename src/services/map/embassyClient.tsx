import axios, { AxiosError } from 'axios';
import apiConfig from '../../config/api';

const embassyClient = axios.create({
  baseURL: apiConfig.PRODUCTS_URL + apiConfig.EMBASSY,
});

embassyClient.interceptors.request.use(request => {
  // console.log('Starting Request', JSON.stringify(request, null, 2));
  request.params = request.params || {};
  return request;
});

embassyClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      //error.message = 'test case';
    }
    throw error;
  },
);

export { embassyClient };
