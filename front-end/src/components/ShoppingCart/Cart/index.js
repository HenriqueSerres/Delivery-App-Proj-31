import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Cart({ id, name, quantity, price }) {
  return (
    <Container>
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
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
            <button
              type="button"
              onClick={ () => handleClick() }
            >
              Remover
            </button>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

Cart.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.isRequired;

export default Cart;
