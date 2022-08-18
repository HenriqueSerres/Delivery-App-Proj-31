import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Products/Header';
import Address from '../../components/ShoppingCart/Address';
import Cart from '../../components/ShoppingCart/Cart';
import Context from '../../context/Context';
import { URL_ORDERS } from '../../helpers/constants';
import { axiosRequestToken, getAxiosRequestSellers } from '../../services';

function ShoppingCart() {
  const { total, shoppingCartItems,
    setShoppingCartItems } = useContext(Context);
  const [sellers, setSellers] = useState([]);
  const [idSeller, setIdSeller] = useState();
  const [address, setAddress] = useState({
    clientAddress: '',
    clientNumber: '',
  });

  useEffect(() => {
    const funcao = () => (
      JSON.parse(localStorage.getItem('carrinho'))
    );
    setShoppingCartItems(funcao());
  }, []);

  useEffect(() => {
    const getSellers = async () => {
      const sellersAxios = await getAxiosRequestSellers();
      setSellers(sellersAxios);
      setIdSeller(sellersAxios[0].id);
    };
    getSellers();
  }, []);

  const history = useHistory();

  const handleClick = async () => {
    const data = {
      sellerId: idSeller,
      totalPrice: Number(total),
      deliveryAddress: address.clientAddress,
      deliveryNumber: address.clientNumber,
      status: 'Pendente',
      products: shoppingCartItems,
    };
    const a = await axiosRequestToken(URL_ORDERS, data);
    if (a?.statusText?.includes('Created')) {
      const orderId = a.data.id;
      history.push(`/customer/orders/${orderId}`);
    }
  };

  return (
    <div>
      <Header />
      <h3>Finalizar Pedido</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingCartItems
            && shoppingCartItems
              .filter((item) => +item.quantity > 0)
              .map(({ name, quantity, price }, id) => (

                <Cart
                  id={ id }
                  name={ name }
                  quantity={ quantity }
                  price={ price }
                  key={ name }
                />))
          }
        </tbody>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        Total:
        {`R$ ${total.toString().replace('.', ',')}`}
      </h2>
      <h3>Detalhes e endereço para entrega</h3>
      <Address
        sellers={ sellers }
        setAddress={ setAddress }
        setIdSeller={ setIdSeller }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => handleClick() }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
export default ShoppingCart;
