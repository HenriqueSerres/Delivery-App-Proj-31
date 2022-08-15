import React from 'react';
import PropTypes from 'prop-types';

function Cart({ id, name, quantity, price }) {
  return (

    <>
      <tr>
        <td
          data-testid={
            `customer_checkout__element-order-table-item-number--${id}`
          }
        >
          {id}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-name--${id}` }>
          {name}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-quantity--${id}` }>
          {quantity}
        </td>
        <td
          data-testid={
            `customer_checkout__element-order-table-unit-price--${id}`
          }
        >
          {price}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-sub-total--${id}` }>
          {quantity * price}
        </td>
      </tr>

      <button
        type="button"
        onClick={ () => handleClick }
        data-testid={ `customer_checkout__element-order-table-remove--${id}` }
      >
        Remover
      </button>
    </>
  );
}

Cart.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.isRequired;

export default Cart;
