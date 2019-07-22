import axios from 'axios';


const BASE_URL = `http://localhost:3000`;

export const fetchEateries = async () => {
  await axios.get(`${BASE_URL}/eateries`);
}
export const fetchComments = async () => {
  await axios.get(`${BASE_URL}/comments`); 
}
export const updateEatery = async (data) => {
  const { id, ...eateryData} = data;
  await axios.put(`${BASE_URL}/eateries/${id}`, eateryData)
}
export const updateComment = async (data) => {
  const { id, ...commentData} = data;
  await axios.put(`${BASE_URL}/eateries/${id}`, commentData)
 }
export const createEatery = async (eatery) => {
  console.log('doesthiswork')
  const resp = await axios.post(`${BASE_URL}/addEatery`, eatery);
  return resp.data
}
export const createComment = async (newComment) => {
  console.log('working yay')
  const resp = await axios.post(`${BASE_URL}/comments`, newComment)
  return resp.data;
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



