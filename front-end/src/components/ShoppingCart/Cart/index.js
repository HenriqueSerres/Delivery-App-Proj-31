import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../../context/Context';

function Cart({ id, name, quantity, price }) {
  const { shoppingCartItems, setTotal,
    calculateTotalPrice, setShoppingCartItems } = useContext(Context);

  const handleClick = () => {
    const filterByName = shoppingCartItems.map((item) => {
      if (item.name === name) {
        item.quantity = 0;
      }
      return item;
    });
    setShoppingCartItems(filterByName);
    const calculateTotal = calculateTotalPrice(shoppingCartItems);
    setTotal(calculateTotal);
    localStorage.setItem('carrinho', JSON.stringify(filterByName));
  };

  return (

    <>
      <tr>
        <td
          data-testid={
            `customer_checkout__element-order-table-item-number--${id}`
          }
        >
          {id + 1}
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
          {Number(price).toFixed(2).toString().replace('.', ',')}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-sub-total--${id}` }>
          {(quantity * price).toFixed(2).toString().replace('.', ',')}
        </td>
      </tr>

      <button
        type="button"
        onClick={ () => handleClick() }
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
