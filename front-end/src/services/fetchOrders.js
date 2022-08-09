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
    return data;
  } catch (error) {
    console.log('ERROR: Erro na função "fetchOrders"');
    console.log(error.message);
  }
};

export default fetchAllOrders;
