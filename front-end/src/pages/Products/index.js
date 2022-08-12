import React, { useState, useEffect, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { getAxiosRequest } from '../../services/index';

import Header from '../../components/Products/Header';

// import { Container, BoxProducts } from './styles';
import ProductsItem from '../../components/Products/ProductsItem';
import Context from '../../context/Context';

import './styles.css';

const eleven = 11;

function Products() {
  const [productsData, setProductsData] = useState([]);
  const { total, setShoppingCart } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
      const shoppingCartData = getData.slice(0, eleven).map(({ name, price }) => ({
        name,
        price,
        quantity: 0,
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
            <ProductsItem product={ product } key={ product.id } />
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
