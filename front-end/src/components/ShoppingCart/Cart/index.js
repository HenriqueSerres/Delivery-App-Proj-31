import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../../context/Context';

function Cart({ id, name, quantity, price }) {
  const { setTotal, shoppingCartItems, setShoppingCartItems } = useContext(Context);

  const handleClick = () => {
    const a = shoppingCartItems.map((item) => {
      if (item.name === name) {
        item.quantity = 0;
      }
      return item;
    });
    const b = shoppingCartItems.reduce((acc, curr) => {
      acc += Number(curr.price) * Number(curr.quantity);
      return acc;
    }, 0);
    setShoppingCartItems(a);
    localStorage.setItem('carrinho', JSON.stringify(a));
    setTotal(b);
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
