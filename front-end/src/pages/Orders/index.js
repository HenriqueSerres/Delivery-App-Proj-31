import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchAllOrders from '../../services/fetchOrders';
import { URL_ORDERS } from '../../helpers/constants';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';

function Orders() {
  const [customerOrders, setCustomerOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData.role !== 'customer') {
      alert('Você não é um cliente >:(');
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

  return (
    <div className="customer-orders">
      <Header />
      <div>
        { customerOrders.length === 0
          ? (<h1>Você ainda não tem pedidos</h1>)
          : customerOrders.map((order) => (
            <div
              key={ order.id }
              data-testid={ `customer_products__element-order-date-${order.id}` }
            >
              <OrderCard
                orderId={ order.id }
                status={ order.status }
                orderDate={ order.saleDate }
                totalPrice={ Number(order.totalPrice) }
                pathRoute={ URL_ORDERS }
                userRole="customer"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Orders;
