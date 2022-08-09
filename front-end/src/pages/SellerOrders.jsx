import React from 'react';
import OrderCard from '../components/OrderCard';
// import fetchAllOrders from '../services/fetchOrders';
import '../styles/sellerOrders.css';

function SellerOrders() {
  const orders = [];
  // fetchAllOrders('http://localhost:3001/mock/orders', 'token').then((data) => {
  //   orders = data;
  // });
  return (
    <section className="seller-orders-page">
      <span>Tela de pedidos do Vendedor</span>
      <br />
      <br />
      <section className="section-order-cards">
        {
          orders.map(({ id, status, saleDate, totalPrice, deliveryAddress }) => (
            <OrderCard
              key={ id }
              order={ `Pedido ${id}` }
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
