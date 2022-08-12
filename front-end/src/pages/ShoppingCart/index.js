import React, { useContext } from 'react';
import Header from '../../components/Products/Header';
import Address from '../../components/ShoppingCart/Address';
import Cart from '../../components/ShoppingCart/Cart';
import Context from '../../context/Context';

function ShoppingCart() {
  const { total, shoppingCartItems } = useContext(Context);

  return (
    <div>
      <Header />
      <h3>Finalizar Pedido</h3>
      {shoppingCartItems !== undefined
        && shoppingCartItems !== null
        && shoppingCartItems
          .filter((item) => item.quantity > 0)
          .map(({ name, quantity, price }, id) => (
            <Cart
              id={ id }
              name={ name }
              quantity={ quantity }
              price={ price }
              key={ name }
            />
          ))}
      <h2>
        Total:
        {`R$ ${total.toString().replace(',', ',')}`}
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
