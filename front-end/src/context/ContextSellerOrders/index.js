import { useEffect, useState } from 'react';
import fetchAllOrders from '../../services/fetchOrders';

function ContextSellerOrders() {
  const [stateAllOrders, setStateAllOrders] = useState([]);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('userData'));
    if (userToken) {
      console.log('token:', userToken.token);
      fetchAllOrders('http://localhost:3001/orders', userToken.token)
      .then((data) => {
        const dataFormatted = data.map((elementObj) =>  {
          const order = elementObj;
          const saleDate = new Date(order.saleDate);
          const date = [saleDate.getDay(), saleDate.getMonth(), saleDate.getFullYear()];
          order.saleDate = `${date[0]}/${date[1]}/${date[2]}`;
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
