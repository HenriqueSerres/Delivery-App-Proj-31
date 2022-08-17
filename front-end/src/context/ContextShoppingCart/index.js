import { useState, useEffect } from 'react';

const ContextShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState();
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    let cartItemsData = localStorage.getItem('carrinho');
    cartItemsData = JSON.parse(cartItemsData);
    setShoppingCartItems(cartItemsData);
  }, []);

  const contextShoppingCart = {
    shoppingCart,
    setShoppingCart,
    shoppingCartItems,
    setShoppingCartItems,
    storeItems,
    setStoreItems,
  };

  return { contextShoppingCart };
};

export default ContextShoppingCart;
