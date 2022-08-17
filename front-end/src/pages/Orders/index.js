import { useContext } from 'react';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';
import Context from '../../context/Context';
import { useHistory } from 'react-router-dom';

function Orders({ match: { path } }) {
  const { customerOrders } = useContext(Context);

  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem('user')) || {};

  if (userData.role !== 'customer') {
    alert('Você não é um cliente :(');
    history.push('/login');
  }
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

export default Orders;
