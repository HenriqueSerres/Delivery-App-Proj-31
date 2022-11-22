import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import validateEmail from '../helpers/data';

import Input from '../components/GenericInput';

import { axiosRequest } from '../services/index';
import { URL_LOGIN, MIN_LENGTH_LOGIN } from '../helpers/constants';

const STATUS_CODE_OK = 200;

function Login() {
  const [verify, setVerify] = useState(false);
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);

  const history = useHistory();

  const redirectUser = (userRole) => {
    switch (userRole) {
    case 'customer':
      history.push('/customer/products');
      break;

    case 'seller':
      history.push('/seller/orders');
      break;

    case 'administrator':
      history.push('/admin/manage');
      break;

    default:
      history.push('/register');
      break;
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) redirectUser(userData.role);
  }, []);

  useEffect(() => {
    const emailCheck = validateEmail(emailLogin);
    const passwordCheck = passwordLogin.length >= MIN_LENGTH_LOGIN;
    if (emailCheck && passwordCheck) {
      setDisabledLogin(false);
    } else {
      setDisabledLogin(true);
    }
  }, [emailLogin, passwordLogin]);

  const handleClick = () => {
    axiosRequest(URL_LOGIN, 'POST', {
      email: emailLogin,
      password: passwordLogin,
    }).then((response) => {
      if (
        response.message !== undefined
        && response.message.includes('404')
      ) return setVerify(true);
      const { name, email, role, token } = response.data;
      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
      if (response.status === STATUS_CODE_OK) {
        redirectUser(role);
      }
    }).catch((error) => console.log(error));
  };

  return (
    <div>
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
          value={ emailLogin }
          onChange={ ({ target }) => setEmailLogin(target.value) }
        />
        {/* Password */}
        <Input
          htmlFor="common_login__input-password"
          type="password"
          dataTestId="common_login__input-password"
          placeholder="********"
          value={ passwordLogin }
          onChange={ ({ target }) => setPasswordLogin(target.value) }
        />
        {/* Botão Login */}
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disabledLogin }
          onClick={ () => handleClick() }
        >
          Login
        </button>
        {/* Botão Cadastro */}
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não possui conta
        </button>
      </form>
      {
        verify && (
          <p data-testid="common_login__element-invalid-email">
            Email não cadastrado
          </p>
        )
      }
    </div>
  );
}

export default Login;
