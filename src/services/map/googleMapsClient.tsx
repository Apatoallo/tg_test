import axios, { AxiosError } from 'axios';
import apiConfig from '../../config/api';

const googleMapsClient = axios.create({
  baseURL: apiConfig.GOOGLE_MAPS_API,
});

googleMapsClient.interceptors.request.use(request => {
  //console.log('Starting Request', JSON.stringify(request, null, 2));
  request.params = request.params || {};
  request.params.key = apiConfig.GIS_KEY;
  return request;
});

googleMapsClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      //error.message = 'test case';
    }
    throw error;
  },
);

export { googleMapsClient };
