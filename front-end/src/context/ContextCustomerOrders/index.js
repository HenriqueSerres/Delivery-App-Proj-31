import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchAllOrders from '../../services/fetchOrders';
import { HTTP_UNAUTHORIZED, URL_ORDERS } from '../../helpers/constants';
import formatDate from '../../helpers/formatDate';

const ContextCustomerOrders = () => {
  const [customerOrders, setCustomerOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      fetchAllOrders(URL_ORDERS, userData.token)
        .then((data) => {
          if (Array.isArray(data) && !Object.keys(data).includes('message')) {
            const dataFormatted = data.map((elementObj) => {
              const order = elementObj;
              const saleDate = new Date(order.saleDate);
              order.saleDate = formatDate(saleDate);
              return order;
            });
            setCustomerOrders(dataFormatted);
          } else {
            if (data.httpStatusCode === HTTP_UNAUTHORIZED) history.push('/login');
            return [];
          }
        }).catch((error) => console.error(error));
    } else {
      history.push('/login');
    }
  }, []);

  const ContextCustOrdObj = {
    customerOrders,
  };

  return { ContextCustOrdObj };
};

export default ContextCustomerOrders;
