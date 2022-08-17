import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchAllOrders from '../../services/fetchOrders';
import { URL_ORDERS } from '../../helpers/constants';

const ContextCustomerOrders = () => {
  const [customerOrders, setCustomerOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData.role !== 'customer') {
      alert('Você não é um cliente :(');
      history.push('/login');
    } else {
      const getOrders = async () => {
        const { token } = userData;
        const orders = await fetchAllOrders(URL_ORDERS, token);
        setCustomerOrders(orders);
      };
      console.log(userData);
      getOrders();
    }
  }, []);

  const ContextCustOrdObj = {
    customerOrders,
  };

  return { ContextCustOrdObj };
};

export default ContextCustomerOrders;
