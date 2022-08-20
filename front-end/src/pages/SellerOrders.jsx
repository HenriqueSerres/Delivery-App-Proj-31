import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderCard from '../components/OrderCard';
import '../styles/styles-pages/sellerOrders.css';
import Header from '../components/Products/Header';
import { useHistory } from 'react-router-dom';
import fetchAllOrders from '../services/fetchOrders';
import formatDate from '../helpers/formatDate';
import { HTTP_UNAUTHORIZED } from '../helpers/constants';

function SellerOrders({ match: { path } }) {
  const [stateAllOrders, setStateAllOrders] = useState([]);
  const [stateDisplayPage, setStateDisplayPage] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'seller') history.push('/login');
    fetchAllOrders('http://localhost:3001/orders', userData.token)
      .then((data) => {
        if (Array.isArray(data) && !Object.keys(data).includes('message')) {
          const dataFormatted = data.map((elementObj) => {
            const order = elementObj;
            const saleDate = new Date(order.saleDate);
            order.saleDate = formatDate(saleDate);
            return order;
          });
          setStateAllOrders(dataFormatted);
          setStateDisplayPage(true);
        } else {
          if (data.httpStatusCode === HTTP_UNAUTHORIZED) history.push('/login');
          return [];
        }
      }).catch((error) => console.error(error));
  }, []);

  return (
    <section>
      {stateDisplayPage ? (
        <section className="seller-orders-page">
          <Header />
          <br />
          <br />
          <section className="section-order-cards">
            { stateAllOrders.map(
              ({ id, status, saleDate, totalPrice, deliveryAddress }) => (
                <OrderCard
                  key={ id }
                  orderId={ id }
                  status={ status }
                  orderDate={ saleDate }
                  totalPrice={ Number(totalPrice) }
                  address={ deliveryAddress }
                  pathRoute={ path }
                  userRole="seller"
                />
              ),
            ) }
          </section>
          <br />
          <br />
        </section>
      ) : (
        <section>
          <span>A página parece estar indiponível !</span>
          <br />
          <span>DESCULPE :\</span>
        </section>
      )}
    </section>
  );
}

SellerOrders.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
  }),
  path: PropTypes.string,
};

SellerOrders.defaultProps = {
  match: {},
  path: '',
};

export default SellerOrders;
