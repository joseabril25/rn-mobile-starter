/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
// eslint-disable-next-line import/no-cycle
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 60000, // 1min
});

export default instance;
