import React, { useState, useEffect, useContext } from 'react';

import { getAxiosRequest } from '../../services/index';

import Header from '../../components/Products/Header';

import { Container, BoxProducts } from './styles';
import ProductsItem from '../../components/Products/ProductsItem';
import Context from '../../context/Context';

function Products() {
  const [productsData, setProductsData] = useState([]);
  const { total, shoppingCart, setShoppingCart } = useContext(Context);

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
      const shoppingCartData = getData.slice(0, 11).map(({ name, price }) => ({
        name,
        price,
        quantity: 0
      }));
      setShoppingCart(shoppingCartData);
    };
    getInfoProducts();
  }, []);

  return (
    <Container>
      <Header />
      <BoxProducts>
        {productsData !== undefined &&
          productsData.map((product) => (
            <ProductsItem product={product} key={product.id} />
          ))}
      </BoxProducts>
      <button type="button" onClick={() => history.push('/customer/checkout')}>
        {`Ver Carrinho: ${total}`}
      </button>
    </Container>
  );
}

export default Products;
