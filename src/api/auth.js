/* eslint-disable import/no-cycle */
import api from '../utils/api';

export const requestLogin = ({ email, password }) =>
  api.post('/api/v1/auth/login', { email, password });
