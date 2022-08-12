import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const [name, setName] = useState('');

  const history = useHistory();

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('user'));
    setName(getFromLocal !== null ? getFromLocal.name : '');
  }, []);

  return (
    <div>
      {/* Header */}
      {/* Produtos */}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        Produtos
      </button>
      {/* Meus Pedidos */}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/checkout') }
      >
        Meus Pedidos
      </button>
      {/* Usuário */}
      <h3 data-testid="customer_products__element-navbar-user-full-name">{name}</h3>
      {/* Sair */}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        sair
      </button>
    </div>
  );
}

export default Header;
