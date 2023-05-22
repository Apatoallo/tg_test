import axios from 'axios';

const baseApiUrl = 'https://jsonplaceholder.typicode.com/';

const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
