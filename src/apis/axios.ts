import axios from 'axios';

const BASE_URL = 'https://parkingcomestrue.com/';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.defaults.withCredentials = true;
