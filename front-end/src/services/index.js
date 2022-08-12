import axios from 'axios';
import { URL_PRODUCTS } from '../helpers/constants';

const applicationJSON = 'application/json';

const setOptions = (url, method, data) => ({
  url,
  method,
  headers: {
    // "x-access-token": token,
    Accept: applicationJSON,
    'Content-Type': applicationJSON,
  },
  data,
});

export const getAxiosRequest = async () => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .get(URL_PRODUCTS, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
};

export const axiosRequest = (u, m, d) => axios(setOptions(u, m, d))
  .then((response) => response)
  .catch((err) => err);
