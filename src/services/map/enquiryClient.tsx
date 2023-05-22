import axios, { AxiosError } from 'axios';
import apiConfig from '../../config/api';

const enquiryClient = axios.create({
  baseURL: apiConfig.BASE_URL + apiConfig.ENQUIRY,
});

enquiryClient.interceptors.request.use(request => {
  // console.log('Starting Request', JSON.stringify(request, null, 2));
  request.params = request.params || {};
  return request;
});

enquiryClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      //error.message = 'test case';
    }
    throw error;
  },
);

export { enquiryClient };
