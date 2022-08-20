import React from 'react';
import PropTypes from 'prop-types';

function Cart({ itemId, index, name, quantity, price, funcRemoveProduct }) {
  return (
    <>
      <tr>
        <td
          data-testid={
            `customer_checkout__element-order-table-item-number--${index}`
          }
        >
          {index + 1}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-name--${index}` }>
          {name}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-quantity--${index}` }>
          {quantity}
        </td>
        <td
          data-testid={
            `customer_checkout__element-order-table-unit-price--${index}`
          }
        >
          {Number(price).toFixed(2).toString().replace('.', ',')}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-sub-total--${index}` }>
          {(quantity * price).toFixed(2).toString().replace('.', ',')}
        </td>
      </tr>

      <button
        type="button"
        onClick={ () => funcRemoveProduct(itemId) }
        data-testid={ `customer_checkout__element-order-table-remove--${index}` }
      >
        Remover
      </button>
    </>
  );
}

Cart.propTypes = {
  index: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.isRequired;

export default Cart;
