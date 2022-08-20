import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAxiosRequest } from '../../services/index';
import Header from '../../components/Products/Header';
import ProductsItem from '../../components/Products/ProductsItem';
import './styles.css';

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [total, setTotal] = useState(0);

  const history = useHistory();

  useEffect(() => {
    getAxiosRequest().then((response) => {
      const shoppingCartData = response.slice(0, response.length)
        .map(({ name, price, id }) => ({
          name,
          price,
          quantity: 0,
          id,
        }));
      localStorage.setItem('carrinho', JSON.stringify(shoppingCartData));
      setProductsData(response);
    });
  }, []);

  return (
    <div className="main-products">
      <Header />
      <div>
        {productsData !== undefined
          && productsData.map((product) => (
            <ProductsItem
              product={ product }
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
          Ver Carrinho:
          { ` ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
        </span>
      </button>
    </div>
  );
}

export default Products;
