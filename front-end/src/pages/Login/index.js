import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Context from '../../context/Context';
import Input from '../../components/GenericInput';

import Container from './styles';

import axiosRequest from '../../services/index';
import { URL_LOGIN } from '../../helpers/constants';

const STATUS_CODE_OK = 200;

function Login() {
  const { email, setEmail, password, setPassword, disabled } = useContext(Context);

  const history = useHistory();

  const handleClick = async () => {
    const postLoginInfo = await axiosRequest(URL_LOGIN, 'POST', {
      email,
      password,
    });
    if (!postLoginInfo) return;
    if (postLoginInfo.status === STATUS_CODE_OK) {
      history.push('/customer/products');
    }
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
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        {/* Password */}
        <Input
          htmlFor="common_login__input-password"
          type="password"
          dataTestId="common_login__input-password"
          placeholder="********"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        {/* Botão Login */}
        <button type="button" disabled={ disabled } onClick={ () => handleClick() }>
          Login
        </button>
        {/* Botão Cadastro */}
        <button type="button" onClick={ () => history.push('/register') }>
          Ainda não possui conta
        </button>
      </form>
    </Container>
  );
}

export default Login;
