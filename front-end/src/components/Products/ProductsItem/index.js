import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Context from '../../../context/Context';

function ProductsItem({ product }) {
  const { id, price, name, urlImage } = product;

  const [valuePrice, setValuePrice] = useState(0);

  const {
    increaseQuantity,
    decreaseQuantity,
    shoppingCart,
    totalPrice,
  } = useContext(Context);

  const handleChange = ({ value }) => {
    const shoppingCartNewQuantity = shoppingCart.map((item) => {
      if (item.name === name) {
        item.quantity = Number(value);
        setValuePrice(item.quantity);
      }
      return item;
    });
    console.log(1);
    totalPrice(shoppingCartNewQuantity);
  };

  return (
    <div>
      Imagem
      <img
        src={ urlImage }
        alt=""
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      {/* name */}
      {/* Name */}
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h3>
      {/* Preço */}
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        {' '}
        {price.replace('.', ',')}
      </p>
      <article>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => setValuePrice(decreaseQuantity(name, shoppingCart)) }
        >
          -
        </button>
        <input
          type="text"
          id="input-quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valuePrice }
          onChange={ ({ target }) => handleChange(target) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setValuePrice(increaseQuantity(name, shoppingCart)) }
        >
          +
        </button>
      </article>
    </div>
  );
}

ProductsItem.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  name: PropTypes.string,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductsItem;
