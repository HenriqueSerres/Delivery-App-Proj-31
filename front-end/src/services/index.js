import axios from 'axios';

const setOptions = (url, method, data) => ({
  url,
  method,
  headers: {
    // "x-access-token": token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data,
});

const axiosRequest = async (url, method, data) => await axios(setOptions(url, method, data))
  .then((response) => response)
  .catch((err) => err);

export default axiosRequest;
