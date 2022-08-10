import { useState, useEffect } from 'react';
import { getAxiosRequest } from '../../services';

const calculateTotalPrice = (cart) => cart
  .reduce((acc, curr) => acc + Number(curr.quantity) * Number(curr.price), 0)
  .toFixed(2);

function ContextProducts() {
  const [productsData, setProductsData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
    };
    getInfoProducts();
  }, []);

  const totalPrice = (cart) => setTotal(calculateTotalPrice(cart));

  const decreaseQuantity = (name, shoppingCart) => {
    let store;
    const shoppingCartNewQuantity = shoppingCart.map((item) => {
      if (item.name === name && item.quantity !== 0) {
        item.quantity -= 1;
        store = item.quantity;
      }
      return item;
    });
    totalPrice(shoppingCartNewQuantity);
    localStorage.setItem('cart', JSON.stringify(shoppingCartNewQuantity));
    return store;
  };

  const increaseQuantity = (name, shoppingCart) => {
    let store;
    const shoppingCartNewQuantity = shoppingCart.map((item) => {
      if (item.name === name) {
        item.quantity += 1;
        store = item.quantity;
      }
      return item;
    });
    totalPrice(shoppingCartNewQuantity);
    localStorage.setItem('cart', JSON.stringify(shoppingCartNewQuantity));
    return store;
  };

  const contextProductsObj = {
    productsData,
    total,
    setTotal,
    decreaseQuantity,
    increaseQuantity,
    totalPrice };

  return { contextProductsObj };
}

export default ContextProducts;
