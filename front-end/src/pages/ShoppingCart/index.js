import React, { useState, useEffect } from 'react';
import Cart from '../../components/ShoppingCart/Cart';

import { Container } from './styles';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartFromLocalStorage = async () => {
      const cartItemsData = await localStorage.getItem('cart');
      setCartItems(JSON.parse(cartItemsData));
    };
    getCartFromLocalStorage();
  }, []);

  console.log(cartItems);

  return (
    <Container>
      {cartItems !== null &&
        cartItems !== undefined &&
        cartItems.length > 0 &&
        cartItems.filter((item) => item.quantity > 0).map((item) => <Cart item={item} />)}
    </Container>
  );
}

export default ShoppingCart;
