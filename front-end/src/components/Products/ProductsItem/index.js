import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductsItem({ product, setTotal }) {
  const [valuePrice, setValuePrice] = useState(0);

  const { id, price, name, urlImage } = product;

  const calculateTotalPrice = (cart) => cart
    .reduce((acc, curr) => acc + Number(curr.quantity) * Number(curr.price), 0);

  const totalPrice = (cart) => setTotal(calculateTotalPrice(cart));

  const decreaseQuantity = (nameItem) => {
    const storageShoppingCart = JSON.parse(localStorage.getItem('carrinho')) || [];
    let store;
    const shoppingCartNewQuantity = storageShoppingCart.map((item) => {
      if (item.name === nameItem) {
        item.quantity -= item.quantity === 0 ? 0 : 1;
        store = item.quantity;
      }
      return item;
    });
    totalPrice(shoppingCartNewQuantity);
    localStorage.setItem('carrinho', JSON.stringify(shoppingCartNewQuantity));
    return store;
  };

  const increaseQuantity = (nameItem) => {
    const storageShoppingCart = JSON.parse(localStorage.getItem('carrinho')) || [];
    let store;
    const shoppingCartNewQuantity = storageShoppingCart.map((item) => {
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
    const storageShoppingCart = JSON.parse(localStorage.getItem('carrinho')) || [];
    const shoppingCartNewQuantity = storageShoppingCart.map((elementObj) => {
      const item = { ...elementObj };
      if (item.id === id) {
        item.quantity = Number(value);
        setValuePrice(item.quantity);
      }
      return item;
    });
    localStorage.setItem('carrinho', JSON.stringify(shoppingCartNewQuantity));
    totalPrice(shoppingCartNewQuantity);
  };

  return (
    <div>
      <img
        src={ urlImage }
        alt="product-id"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      {/* Name */}
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h3>
      {/* Preço */}
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        {` ${price.replace('.', ',')}`}
      </p>
      <article>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => setValuePrice(decreaseQuantity(name)) }
        >
          -
        </button>
        <input
          type="number"
          id="input-quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valuePrice }
          onChange={ ({ target }) => handleChange(target) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setValuePrice(increaseQuantity(name)) }
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
