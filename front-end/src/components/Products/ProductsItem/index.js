import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductsItem({ product, setTotal, shoppingCart }) {
  const { id, price, name, urlImage } = product;

  const [valuePrice, setValuePrice] = useState(0);

  const calculateTotalPrice = (cart) => cart
    .reduce((acc, curr) => acc + Number(curr.quantity) * Number(curr.price), 0)
    .toFixed(2);

  const totalPrice = (cart) => setTotal(calculateTotalPrice(cart));

  const decreaseQuantity = (nameItem, shoppingCartItem) => {
    let store;
    const shoppingCartNewQuantity = shoppingCartItem.map((item) => {
      if (item.name === nameItem && item.quantity !== 0) {
        item.quantity -= 1;
        store = item.quantity;
      }
      return item;
    });
    totalPrice(shoppingCartNewQuantity);
    localStorage.setItem('carrinho', JSON.stringify(shoppingCartNewQuantity));
    return store;
  };

  const increaseQuantity = (nameItem, shoppingCartItems) => {
    let store;
    const shoppingCartNewQuantity = shoppingCartItems.map((item) => {
      if (item.name === nameItem) {
        item.quantity += 1;
        store = item.quantity;
      }
      return item;
    });
    totalPrice(shoppingCartNewQuantity);
    localStorage.setItem('carrinho', JSON.stringify(shoppingCartNewQuantity));
    return store;
  };

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
