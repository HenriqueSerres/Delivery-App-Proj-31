import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import Context from '../context/Context';
import '../styles/sellerOrders.css';
import Header from '../components/Products/Header';

function SellerOrders({ match: { path } }) {
  const { stateAllOrders } = useContext(Context);
  return (
    <section className="seller-orders-page">
      <Header />
      <br />
      <br />
      <section className="section-order-cards">
        {
          stateAllOrders.map(({ id, status, saleDate, totalPrice, deliveryAddress }) => (
            <OrderCard
              key={ id }
              orderId={ id }
              status={ status }
              orderDate={ saleDate }
              totalPrice={ totalPrice }
              address={ deliveryAddress }
              pathRoute={ path }
              userRole="seller"
            />
          ))
        }
      </section>
      <br />
      <br />
    </section>
  );
}

export default SellerOrders;
