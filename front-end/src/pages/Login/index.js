import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Context from '../../context/Context';
import Input from '../../components/Login/Input';

import { Container } from './styles';

import axiosRequest from '../../services/index';
import { URL_LOGIN } from '../../helpers/constants';

function Login() {
  const { email, setEmail, password, setPassword, disabled } = useContext(Context);

  const history = useHistory();

  const handleClick = async () => {
    const postLoginInfo = await axiosRequest(URL_LOGIN, 'POST', {
      email,
      password
    });
    if (!postLoginInfo) return;
    console.log(postLoginInfo.status);
  };

  return (
    <Container>
      {/* Logo */}
      <img src="" alt="" />
      {/* Nome */}
      <h2>Nome App</h2>
      {/* Email */}
      <form action="">
        <Input
          htmlFor="common_login__input-email"
          type="email"
          dataTestId="common_login__input-email"
          placeholder="email@trybeer.com.br"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        {/* Password */}
        <Input
          htmlFor="common_login__input-password"
          type="password"
          dataTestId="common_login__input-password"
          placeholder="********"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {/* Botão Login */}
        <button type="button" disabled={disabled} onClick={() => handleClick()}>
          Login
        </button>
        {/* Botão Cadastro */}
        <button type="button" onClick={() => navigate('/register')}>
          Ainda não possui conta
        </button>
      </form>
    </Container>
  );
}

export default Login;
