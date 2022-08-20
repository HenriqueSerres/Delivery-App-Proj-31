import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';
import fetchAllOrders from '../../services/fetchOrders';
import { HTTP_UNAUTHORIZED, URL_ORDERS } from '../../helpers/constants';
import formatDate from '../../helpers/formatDate';

function Orders({ match: { path } }) {
  const [customerOrders, setCustomerOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'customer') history.push('/login');
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
  }, []);

  return (
    <div className="customer-orders">
      <Header />
      <div>
        { customerOrders.length === 0
          ? (<h1>Você ainda não tem pedidos</h1>)
          : customerOrders.map((order) => (
            <OrderCard
              key={ order.id }
              orderId={ order.id }
              status={ order.status }
              orderDate={ order.saleDate }
              totalPrice={ Number(order.totalPrice) }
              pathRoute={ path }
              userRole="customer"
            />
          ))}
      </div>
    </div>
  );
}

Orders.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
  }),
  path: PropTypes.string,
};

Orders.defaultProps = {
  match: {},
  path: '',
};

export default Orders;
