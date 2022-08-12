import { useState, useEffect } from 'react';

const ContextShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  useEffect(() => {
    const getCartFromLocalStorage = async () => {
      let cartItemsData = await localStorage.getItem('cart');
      cartItemsData = JSON.parse(cartItemsData);
      setShoppingCartItems(cartItemsData);
    };
    getCartFromLocalStorage();
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
