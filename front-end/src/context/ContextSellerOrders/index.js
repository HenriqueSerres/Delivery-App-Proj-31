import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import formatDate from '../../helpers/formatDate';
import fetchAllOrders from '../../services/fetchOrders';

function ContextSellerOrders() {
  const [stateAllOrders, setStateAllOrders] = useState([]);
  const [stateDisplayPage, setStateDisplayPage] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));
    if (userToken) {
      fetchAllOrders('http://localhost:3001/orders', userToken.token)
      .then((data) => {
        if (Array.isArray(data) && !Object.keys(data).includes('message')) {
          const dataFormatted = data.map((elementObj) =>  {
            const order = elementObj;
            const saleDate = new Date(order.saleDate);
            order.saleDate = formatDate(saleDate);
            return order;
          });
          setStateAllOrders(dataFormatted);
          setStateDisplayPage(true);
        } else {
          if (data.httpStatusCode === 401) history.push('/login');
          return [];
        }
      })
      .catch((error) => console.error(error));
    } else {
      history.push('/login');
    }
  }, []);

  const contextSellerOrdersObj = {
    stateAllOrders,
    setStateAllOrders,
    stateDisplayPage,
    setStateDisplayPage,
  }

  return { contextSellerOrdersObj };
}

export default ContextSellerOrders;
