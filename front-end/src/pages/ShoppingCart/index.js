import React, { useState, useContext, useEffect } from 'react';
import Header from '../../components/Products/Header';
import Address from '../../components/ShoppingCart/Address';
import Cart from '../../components/ShoppingCart/Cart';
import Context from '../../context/Context';

function ShoppingCart() {
  const [teste, setTeste] = useState([]);
  const { total, shoppingCartItems } = useContext(Context);

  useEffect(() => {
    const funcao = () => (
      !shoppingCartItems
        ? JSON.parse(localStorage.getItem('carrinho'))
        : shoppingCartItems
    );
    setTeste(funcao());
  }, []);

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
            teste
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
      <Address />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
export default ShoppingCart;
