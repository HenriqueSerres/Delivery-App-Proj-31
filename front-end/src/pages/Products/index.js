import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { getAxiosRequest } from '../../services/index';

import Header from '../../components/Products/Header';

import ProductsItem from '../../components/Products/ProductsItem';

import './styles.css';

const eleven = 11;

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
    };
    getInfoProducts();
  }, []);

  const history = useHistory();

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
      const shoppingCartData = getData.slice(0, eleven).map(({ name, price, id }) => ({
        name,
        price,
        quantity: 0,
        id,
      }));
      setShoppingCart(shoppingCartData);
    };
    getInfoProducts();
  }, [setShoppingCart]);

  return (
    <div className="main-products">
      <Header />
      <div>
        {productsData !== undefined
          && productsData.map((product) => (
            <ProductsItem
              product={ product }
              shoppingCart={ shoppingCart }
              setTotal={ setTotal }
              key={ product.id }
            />
          ))}
      </div>
      <button
        type="button"
        disabled={ +total === 0 }
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          {`Ver Carrinho: ${total.toString().replace('.', ',')}`}
        </span>
      </button>
    </div>
  );
}

export default Products;
