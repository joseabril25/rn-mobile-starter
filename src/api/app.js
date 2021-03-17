/* eslint-disable import/no-cycle */
import api from '../utils/api';

export const requestAnalytics = (token) =>
  api.get('/api/v1/users', 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
  );
