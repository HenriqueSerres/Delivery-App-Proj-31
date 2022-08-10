import React, { useContext, useState } from 'react';
import Context from '../../../context/Context';

import { Container } from './styles';

function ProductsItem({ product }) {
  const { id, price, name, urlImage } = product;

  const [value, setValue] = useState(0);

  const {
    increaseQuantity,
    decreaseQuantity,
    shoppingCart,
    setShoppingCart,
    setTotal,
    totalPrice
  } = useContext(Context);

  const handleChange = (name, { value }) => {
    const shoppingCartNewQuantity = shoppingCart.map((item) => {
      if (item.name === name) {
        item.quantity = Number(value);
        setValue(item.quantity);
      }
      return item;
    });
    console.log(1);
    totalPrice(shoppingCartNewQuantity);
  };

  return (
    <Container>
      {/* Imagem */}
      {/* <img
        src={urlImage}
        alt=""
        data-testid={`customer_products__img-card-bg-image-${id}`}
      /> */}
      {/* name */}
      {/* Name */}
      <h3 data-testid={`customer_products__element-card-name-${id}`}>{name}</h3>
      {/* Preço */}
      <p data-testid={`customer_products__element-card-price-${id}`}>
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <article>
        <button
          type="button"
          data-testid={`customer_products__button-card-rm-item-${id}`}
          onClick={() => setValue(decreaseQuantity(name, shoppingCart))}
        >
          -
        </button>
        <input
          type="text"
          id="input-quantity"
          data-testid={`customer_products__input-card-quantity-${id}`}
          value={value}
          onChange={({ target }) => handleChange(name, target)}
        />
        <button
          type="button"
          data-testid={`customer_products__button-card-add-item-${id}`}
          onClick={() => setValue(increaseQuantity(name, shoppingCart))}
        >
          +
        </button>
      </article>
    </Container>
  );
}

export default ProductsItem;
