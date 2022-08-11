import { useState } from 'react';

const ContextShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const contextShoppingCart = {
    shoppingCart,
    setShoppingCart
  };

  return { contextShoppingCart };
};

export default ContextShoppingCart;
