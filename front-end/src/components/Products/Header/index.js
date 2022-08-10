import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Context from '../../../context/Context';

import Container from './styles';

function Header() {
  const [name, setName] = useState('');

  const history = useHistory();

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('userData'));
    setName(getFromLocal !== null ? getFromLocal.name : '');
  }, []);

  return (
    <Container>
      {/* Header */}
      {/* Produtos */}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={() => history.push('/')}
      >
        Produtos
      </button>
      {/* Meus Pedidos */}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={() => history.push('/')}
      >
        Meus Pedidos
      </button>
      {/* Usuário */}
      <h3 data-testid="customer_products__element-navbar-user-full-name">{name}</h3>
      {/* Sair */}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={() => navigate('/')}
      >
        sair
      </button>
    </Container>
  );
}

export default Header;
