import React, { useState } from 'react';

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
            <td>
              <button type="button" onClick={() => handleClick()}>
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Cart;
