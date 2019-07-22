import axios from 'axios';


export const createEatery = async (eatery) => {
  console.log('doesthiswork')
  const resp = await axios.post('http://localhost:3000/addEatery', eatery);
  return resp.data

}