import React, { useContext } from 'react';
import Cart from '../../components/ShoppingCart/Cart';
import Context from '../../context/Context';

import { Container } from './styles';

function ShoppingCart() {
  const { total, shoppingCartItems } = useContext(Context);

  return (
    <Container>
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
        {total}
      </h2>
    </Container>
  );
}

export default ShoppingCart;
