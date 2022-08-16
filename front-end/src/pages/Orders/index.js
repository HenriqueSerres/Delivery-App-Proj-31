import { useEffect, useState } from 'react';
import fetchAllOrders from '../../services/fetchOrders';
import { URL_ORDERS } from '../../helpers/constants';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';

function Orders() {
  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      const { token } = userData;
      const orders = await fetchAllOrders(URL_ORDERS, token);
      setCustomerOrders(orders);
    };
    getOrders();
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
