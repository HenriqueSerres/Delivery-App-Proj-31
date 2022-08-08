import React from 'react';

import { Container } from './styles';

function ProductsItem() {
  return (
    <Container>
      {/* Preço */}
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
      {/* Imagem */}
      <img src="" alt="" data-testid={ `customer_products__img-card-bg-image-${id}` } />
      {/* Title */}
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>{title}</h3>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => increaseQuantity() }
      >
        -
      </button>
      <input
        type="number"
        id="input-quantity"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        min="0"
        value={ value }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => decreaseQuantity() }
      >
        +
      </button>
    </Container>
  );
}

export default ProductsItem;
