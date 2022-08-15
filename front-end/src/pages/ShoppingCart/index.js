import React, { useContext } from 'react';
import Header from '../../components/Products/Header';
import Address from '../../components/ShoppingCart/Address';
import Cart from '../../components/ShoppingCart/Cart';
import Context from '../../context/Context';

function ShoppingCart() {
  const { total, shoppingCartItems } = useContext(Context);
  console.log(shoppingCartItems);
  return (
    <div>
      <Header />
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
          {
            shoppingCartItems
              // ? (
              //   <Cart
              //     id={ 0 }
              //     name=""
              //     quantity={ 0 }
              //     price={ 0 }
              //     key=""
              //   />
              // )
              && shoppingCartItems
                .map(({ name, quantity, price }, id) => (
                  quantity > 0
                    && (
                      <Cart
                        id={ id }
                        name={ name }
                        quantity={ quantity }
                        price={ price }
                        key={ name }
                      />)
                ))
          }
        </tbody>
      </table>
      <h2>
        Total:
        {`R$ ${total.toString().replace(',', ',')}`}
      </h2>
      <h3>Detalhes e endereço para entrega</h3>
      <Address />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
export default ShoppingCart;
