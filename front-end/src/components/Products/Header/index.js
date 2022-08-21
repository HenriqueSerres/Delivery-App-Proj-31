import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const [name, setName] = useState('');
  const [{
    productsButton,
    myOrdersButton,
    orderButton,
    manageUsersButton,
  }, setStateRenderButtons] = useState({});

  const history = useHistory();

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('user'));
    setName(getFromLocal !== null ? getFromLocal.name : '');
    switch (getFromLocal.role) {
    case 'customer':
      setStateRenderButtons(() => ({
        productsButton: true,
        myOrdersButton: true,
      }));
      break;
    case 'seller':
      setStateRenderButtons(() => ({
        orderButton: true,
      }));
      break;
    case 'administrator':
      setStateRenderButtons(() => ({
        manageUsersButton: true,
      }));
      break;
    default:
      break;
    }
  }, []);
  return (
    <nav>
      { productsButton && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => history.push('/customer/products') }
        >
          PRODUTOS
        </button>
      ) }
      { myOrdersButton && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/customer/orders') }
        >
          MEUS PEDIDOS
        </button>
      ) }
      { orderButton && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/seller/orders') }
        >
          PEDIDOS
        </button>
      ) }
      { manageUsersButton && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/admin/manage') }
        >
          GERENCIAR USUÁRIOS
        </button>
      ) }
      <h3 data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </h3>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/login');
        } }
      >
        Sair
      </button>
    </nav>
  );
}

export default Header;
