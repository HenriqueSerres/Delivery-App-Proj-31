import { useContext } from 'react';
import { URL_ORDERS } from '../../helpers/constants';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';
import Context from '../../context/Context';
import formatDate from '../../helpers/formatDate';

function Orders() {
  const { customerOrders } = useContext(Context);

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
                orderDate={ formatDate(new Date(order.saleDate)) }
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
