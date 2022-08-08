import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Context from '../../context/Context';
import Input from '../../components/Register/FormRegister/Input';

import { Container } from './styles';

import axiosRequest from '../../services/index';
import { URL_REGISTER } from '../../helpers/constants';

function Register() {
  const { name, setName, email, setEmail, password, setPassword, disabled } =
    useContext(Context);

  const history = useHistory();

  const handleClick = async () => {
    const postRegisterInfo = await axiosRequest(URL_REGISTER, 'POST', {
      name,
      email,
      password,
      role: 'customer'
    });
    if (!postRegisterInfo) return;
    console.log(postRegisterInfo);
    localStorage.setItem('userData', JSON.stringify(postRegisterInfo.data));
    if (postRegisterInfo.status === 201) {
      history.push('/customer/products');
    }
  };

  return (
    <Container>
      {/* Nome */}
      <h2>Cadastro</h2>
      <form action="">
        <Input
          htmlFor="common_register__input-name"
          type="text"
          dataTestId="common_register__input-name"
          placeholder="Seu nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        {/* Email */}
        <Input
          htmlFor="common_register__input-email"
          type="email"
          dataTestId="common_register__input-email"
          placeholder="seu email@trybeer.com.br"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        {/* Password */}
        <Input
          htmlFor="common_register__input-password"
          type="password"
          dataTestId="common_register__input-password"
          placeholder="********"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {/* Botão Login */}
        <button type="button" disabled={disabled} onClick={() => handleClick()}>
          Cadastrar
        </button>
        <p data-testid="common_register__element-invalid_register" />
      </form>
    </Container>
  );
}

export default Register;
