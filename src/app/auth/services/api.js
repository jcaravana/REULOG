import mock, { axios } from 'src/@mock-api/mock';
// For common config

mock.restore();
const api = axios.create({
  baseURL: 'https://localhost:44313/api',
});
api.defaults.adapter = mock.originalAdapter;

export default api;
