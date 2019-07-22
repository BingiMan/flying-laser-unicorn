const axios = require('axios');
const URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: URL,
});

export const getPing = async () => {
  const ping = await axios.get(`${URL}/ping`);
  return ping;
}

export const storeToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const createUser = async (userData) => {
  const resp = await axios.post(`${URL}/users`, userData);
  storeToken(resp.data.token)
}
export const loginUser = async (name, password) => {
  const resp = await api.post(`/users/login`, { name, password });
  storeToken(resp.data.token);
  return resp
}