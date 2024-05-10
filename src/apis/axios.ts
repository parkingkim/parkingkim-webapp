import axios from 'axios';

const BASE_URL = 'https://api.parkingcomestrue.com/';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
