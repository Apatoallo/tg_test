import axios, {AxiosError} from 'axios';
import apiConfig from '../../config/api';

const productsClient = axios.create({
  baseURL: apiConfig.BASE_URL + apiConfig.RATES,
});

productsClient.interceptors.request.use(request => {
  // console.log('Starting Request', JSON.stringify(request, null, 2));
  request.params = request.params || {};
  return request;
});

productsClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      //error.message = 'test case';
    }
    throw error;
  },
);

export {productsClient};
