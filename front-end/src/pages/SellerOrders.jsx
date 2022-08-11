import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import Context from '../context/Context';
import '../styles/sellerOrders.css';

function SellerOrders() {
  const { stateAllOrders } = useContext(Context);
  return (
    <section className="seller-orders-page">
      <span>Tela de pedidos do Vendedor</span>
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
