import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Products/Header';
import Address from '../../components/ShoppingCart/Address';
import Cart from '../../components/ShoppingCart/Cart';
import { URL_ORDERS } from '../../helpers/constants';
import { axiosRequestToken, getAxiosRequestSellers } from '../../services';

function ShoppingCart() {
  const [shoppingCartItems, setShoppingCartItems] = useState();
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [idSeller, setIdSeller] = useState();
  const [address, setAddress] = useState({
    clientAddress: '',
    clientNumber: '',
  });

  const history = useHistory();

  const calculateTotalPrice = (cart) => cart
    .reduce((acc, curr) => acc + Number(curr.quantity) * Number(curr.price), 0);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('carrinho'))
      .filter((item) => item.quantity > 0);
    localStorage.setItem('carrinho', JSON.stringify(shoppingCart));
    getAxiosRequestSellers().then((response) => {
      setSellers(response);
      setIdSeller(response[0].id);
    });
    setShoppingCartItems(shoppingCart);
    setTotal(calculateTotalPrice(shoppingCart));
  }, []);

  const handleClick = () => {
    const requestData = {
      sellerId: idSeller,
      totalPrice: Number(total),
      deliveryAddress: address.clientAddress,
      deliveryNumber: address.clientNumber,
      status: 'Pendente',
      products: shoppingCartItems,
    };
    axiosRequestToken(URL_ORDERS, requestData).then((response) => {
      if (response?.statusText?.includes('Created')) {
        const orderId = response.data.id;
        history.push(`/customer/orders/${orderId}`);
      }
    }).catch((error) => console.log(error));
  };

  const removeProduct = (id) => {
    const shoppingCart = JSON.parse(localStorage.getItem('carrinho'));
    const filterByNames = shoppingCart.filter((item) => item.id !== id);
    const calculateTotal = calculateTotalPrice(filterByNames);
    localStorage.setItem('carrinho', JSON.stringify(filterByNames));
    setShoppingCartItems(filterByNames);
    setTotal(calculateTotal);
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
              .map(({ id, name, quantity, price }, index) => (
                <Cart
                  key={ `${name}-${index}` }
                  itemId={ id }
                  index={ index }
                  name={ name }
                  quantity={ quantity }
                  price={ price }
                  funcRemoveProduct={ removeProduct }
                />))
          }
        </tbody>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        Total:
        { total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
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
