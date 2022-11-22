import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from '../components/renderWithRouter';

const emailMock = 'abc@email.com';
const passwordMock = '12345678';

describe('Verifica se a tela de login está correta e', () => {
  it('a página contém um heading h2 com o texto Nome App', () => {
    render(<Login />);
    const title = screen.getByRole('heading', { level: 2, name: /Nome App/i });
    expect(title).toBeInTheDocument();
  });

  it('o data-testid de input de e-mail para login está presente.', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
  });

  it('o data-testid de input de senha para login está presente.', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
  });

  it('o data-testid do botão de login está presente.', () => {
    render(<Login />);
    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
  });

  it('o data-testid de email não cadastrado está presente.', async () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    userEvent.type(inputEmail, emailMock);
    userEvent.type(inputPassword, passwordMock);
    userEvent.click(loginButton);
    setTimeout(() => {
      const invalidEmail = screen.getByTestId('common_login__element-invalid-email');

      expect(invalidEmail).toBeInTheDocument();
    }, '500');
  });

  it('o data-testid do botão para se registrar está presente.', () => {
    render(<Login />);
    const registerButton = screen.getByTestId('common_login__button-register');
    expect(registerButton).toBeInTheDocument();
  });

  it('redireciona para registro ao clicar em "Ainda não possui cadastro"', () => {
    const { history } = renderWithRouter(<Login />);
    const btnRegister = screen.getByText(/Ainda não possui conta/i);
    userEvent.click(btnRegister);
    const { pathname } = history.location;
    expect(pathname).toBe('/register');
  });
});
