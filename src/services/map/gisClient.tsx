import axios, { AxiosError } from 'axios';
import apiConfig from '../../config/api';
import { mockGis } from './mock';

const gisClient = axios.create({
  baseURL: apiConfig.GIS_BASE_URL,
});

gisClient.interceptors.request.use(request => {
  //console.log('Starting Request', JSON.stringify(request, null, 2));
  request.params = request.params || {};
  request.params.key = apiConfig.GIS_KEY;
  return request;
});

gisClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      //error.message = 'test case';
    }
    throw error;
  },
);

if (apiConfig.GIS_MOCK) {
  mockGis(gisClient);
}

export { gisClient };
