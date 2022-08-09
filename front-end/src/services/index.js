import axios from 'axios';
import { URL_PRODUCTS } from '../helpers/constants';

const setOptions = (url, method, data) => ({
  url,
  method,
  headers: {
    // "x-access-token": token,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  data
});

export const getAxiosRequest = async () => {
  const userData = await JSON.parse(localStorage.getItem('userData'));
  if (!userData) return;
  const token = userData.token;
  return axios
    .get(URL_PRODUCTS, {
      headers: {
        'x-access-token': token,
        Accept: 'application/json',
        Authorization: token
      }
    })
    .then((response) => response.data)
    .catch((err) => err);
};

export const axiosRequest = async (url, method, data) =>
  await axios(setOptions(url, method, data))
    .then((response) => response)
    .catch((err) => err);

export default axiosRequest;
