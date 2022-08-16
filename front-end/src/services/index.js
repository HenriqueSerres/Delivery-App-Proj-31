import axios from 'axios';
import { URL_PRODUCTS, URL_SELLERS } from '../helpers/constants';

const applicationJSON = 'application/json';

const setOptions = (url, method, data) => ({
  url,
  method,
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

export const axiosRequestToken = async (u, d) => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;

  return axios.post(
    u,
    { ...d },
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  )

    .then((response) => response)
    .catch((err) => console.log(err));
};

export const getAxiosRequestSellers = async () => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .get(URL_SELLERS, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
};
