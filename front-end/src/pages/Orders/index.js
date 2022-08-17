import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Products/Header';
import OrderCard from '../../components/OrderCard';
import Context from '../../context/Context';

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
