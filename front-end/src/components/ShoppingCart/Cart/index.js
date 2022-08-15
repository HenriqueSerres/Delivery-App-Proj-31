import React from 'react';
import PropTypes from 'prop-types';

function Cart({ id, name, quantity, price }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
            >
              {id}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-name-${id}` }>
              {name}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
              {quantity}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }>
              {price}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }>
              {quantity * price}
            </td>
            <button
              type="button"
              onClick={ () => handleClick() }
              data-testid={ `customer_checkout__element-order-table-remove-${id}` }
            >
              Remover
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Cart.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.isRequired;

export default Cart;
