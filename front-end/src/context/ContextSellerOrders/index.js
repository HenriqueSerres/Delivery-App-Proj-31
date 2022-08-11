import { useEffect, useState } from 'react';
import formatDate from '../../helpers/formatDate';
import fetchAllOrders from '../../services/fetchOrders';

function ContextSellerOrders() {
  const [stateAllOrders, setStateAllOrders] = useState([]);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('userData'));
    if (userToken) {
      fetchAllOrders('http://localhost:3001/orders', userToken.token)
      .then((data) => {
        const dataFormatted = data.map((elementObj) =>  {
          const order = elementObj;
          const saleDate = new Date(order.saleDate);
          order.saleDate = formatDate(saleDate);
          return order;
        })
        setStateAllOrders(dataFormatted);
      })
      .catch((error) => console.error(error.message));
    }
  }, []);

  const contextSellerOrdersObj = {
    stateAllOrders,
    setStateAllOrders,
  }

  return { contextSellerOrdersObj };
}

export default ContextSellerOrders;
