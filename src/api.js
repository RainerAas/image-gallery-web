import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_REST_URL,
  timeout: 30000,
});

export default {
  get(config) {
    return instance.request({ ...config, method: 'GET' });
  },
  post(config) {
    return instance.request({ ...config, method: 'POST' });
  },
  put(config) {
    return instance.request({ ...config, method: 'PUT' });
  },
  patch(config) {
    return instance.request({ ...config, method: 'PATCH' });
  },
  delete(config) {
    return instance.request({ ...config, method: 'DELETE' });
  },
};
