import React, { useContext } from 'react';
import Context from '../../../context/Context';

import Container from './styles';

function Header() {
  const { name } = useContext(Context);
  return (
    <Container>
      {/* Header */}
      {/* Produtos */}
      <h3 data-testid="customer_products__element-navbar-link-products">Produtos</h3>
      {/* Meus Pedidos */}
      <h3 data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</h3>
      {/* Usuário */}
      <h3 data-testid="customer_products__element-navbar-user-full-name">{name}</h3>
      {/* Sair */}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => navigate('/') }
      >
        sair
      </button>
    </Container>
  );
}

export default Header;
