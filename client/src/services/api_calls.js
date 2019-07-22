import axios from 'axios';
BASE_URL = `http://localhost:3000`;

fetchEateries = async () => {
  await axios.get(`${BASE_URL}/eateries`);
}
fetchComments = async () => {
  await axios.get(`${BASE_URL}/comments`); 
}
updateEatery = async (data) => {
  const { id, ...eateryData} = data;
  await axios.put(`${BASE_URL}/eateries/${id}`, eateryData)
}
updateComment = async (data) => {
  const { id, ...commentData} = data;
  await axios.put(`${BASE_URL}/eateries/${id}`, commentData)
 }

