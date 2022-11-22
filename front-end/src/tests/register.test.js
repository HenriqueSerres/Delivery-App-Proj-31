import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../pages/Register';

describe('Verifica se a tela de cadastro está correta e', () => {
  it('a página contém um heading h2 com o texto Cadastro', () => {
    render(<Register />);
    const title = screen.getByRole('heading', { level: 2, name: /Cadastro/i });
    expect(title).toBeInTheDocument();
  });

  it('o data-testid para input de nome está presente.', () => {
    render(<Register />);
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
  });

  it('o data-testid para input de e-mail está presente.', () => {
    render(<Register />);
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeInTheDocument();
  });

  it('o data-testid para input de password está presente.', () => {
    render(<Register />);
    const inputPassord = screen.getByTestId('common_register__input-password');
    expect(inputPassord).toBeInTheDocument();
  });

  it('o data-testid do botão de registro está presente.', () => {
    render(<Register />);
    const registerButton = screen.getByTestId('common_register__button-register');
    expect(registerButton).toBeInTheDocument();
  });
});
