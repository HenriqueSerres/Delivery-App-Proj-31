import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from '../pages/Products';
import Login from '../pages/Login';
// import renderWithRouter from '../components/renderWithRouter';

const emailMock = 'zebirita@email.com';
const passwordMock = '$#zebirita#$';

describe('Verifica se a tela de clientes está correta e ', () => {
  beforeAll(async () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    userEvent.type(inputEmail, emailMock);
    userEvent.type(inputPassword, passwordMock);
    userEvent.click(loginButton);
  });

  it('o data-testid dos links Produtos, Meus Pedidos e Sair', () => {
    setTimeout(() => {
      render(<Products />);
      setTimeout(() => {
        const productsLink = screen
          .getByTestId('customer_products__element-navbar-link-products');
        const meusPedidosLink = screen
          .getByTestId('customer_products__element-navbar-link-orders');
        const logoutLink = screen
          .getByTestId('customer_products__element-navbar-link-logout');

        expect(productsLink).toBeInTheDocument();
        expect(meusPedidosLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
      }, '1000');
    }, '1000');
  });

  it('o data-testid do nome do cliente', () => {
    setTimeout(() => {
      render(<Products />);
      setTimeout(() => {
        const userName = screen
          .getByTestId('customer_products__element-navbar-user-full-name');

        expect(userName).toBeInTheDocument();
      }, '1000');
    }, '1000');
  });

  it('o data-testid do titulo do produto está presente', () => {
    setTimeout(() => {
      render(<Products />);
      setTimeout(() => {
        const titleProduct = screen
          .getByTestId('customer_products__element-card-title-1');
        const priceProduct = screen
          .getAllByTestId('customer_products__element-card-price-1');
        const imgProduct = screen
          .getAllByTestId('customer_products__img-card-bg-image-1');

        expect(titleProduct).toBeInTheDocument();
        expect(priceProduct).toBeInTheDocument();
        expect(imgProduct).toBeInTheDocument();
      }, '1000');
    }, '1000');
  });

  it('o data-testid das quantidades dos produtos', () => {
    setTimeout(() => {
      render(<Products />);
      setTimeout(() => {
        const btnAddItem = screen
          .getAllByTestId('customer_products__button-card-add-item-');
        const btnRemItem = screen
          .getAllByTestId('customer_products__button-card-rm-item-');
        const inputQty = screen.getAllByTestId('customer_products__input-card-quantity-');

        expect(btnAddItem).toBeInTheDocument();
        expect(btnRemItem).toBeInTheDocument();
        expect(inputQty).toBeInTheDocument();
      }, '1000');
    }, '1000');
  });

  it('o data-testid do botão de Ver Carrinho está presente', () => {
    setTimeout(() => {
      render(<Products />);
      setTimeout(() => {
        const carShopBtn = screen
          .getByTestId('customer_products__checkout-bottom-value');

        expect(carShopBtn).toBeInTheDocument();
      }, '1000');
    }, '1000');
  });
});
