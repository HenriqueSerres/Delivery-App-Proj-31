import { HTTP_OK } from '../helpers/constants';

const headers = {
  authorization: '',
};

const init = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'default',
};

const fetchAllOrders = async (url, token) => {
  headers.authorization = token;
  try {
    const response = await fetch(url, init);
    const data = await response.json();
    if (response.status === HTTP_OK) return data;
    return { httpStatusCode: response.status, message: data };
  } catch (error) {
    console.log('ERROR: Erro na função "fetchOrders"');
    console.log(error.message);
    return [];
  }
};

export default fetchAllOrders;
