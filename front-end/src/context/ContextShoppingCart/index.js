import { useState, useEffect } from 'react';

const ContextShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState();

  useEffect(() => {
    let cartItemsData = localStorage.getItem('carrinho');
    cartItemsData = JSON.parse(cartItemsData);
    console.log(cartItemsData);
    setShoppingCartItems(cartItemsData);
  }, []);

  const contextShoppingCart = {
    shoppingCart,
    setShoppingCart,
    shoppingCartItems,
    setShoppingCartItems,
  };

  return { contextShoppingCart };
};

export default ContextShoppingCart;
