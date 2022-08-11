import React, { useEffect } from 'react';

// import { Container } from './styles';

function Cart({ item }) {
  console.log(item);

  useEffect(() => {
    const { name, quantity, price } = item;
  }, []);

  return (
    <Container>
      <h3>Finalizar Pedido</h3>
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
            <td>{unityValue}</td>
            <td>{subTotal}</td>
            <td>
              <button type="button" onClick={() => handleClick()}>
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>
        Total:
        {total}
      </h2>
    </Container>
  );
}

export default Cart;
