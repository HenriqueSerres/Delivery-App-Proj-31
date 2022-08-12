import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Context from '../../context/Context';
import Input from '../../components/GenericInput';

import { axiosRequest } from '../../services/index';
import { URL_LOGIN } from '../../helpers/constants';

const STATUS_CODE_OK = 200;

function Login() {
  const [verify, setVerify] = useState(false);

  const {
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin,
    disabledLogin,
  } = useContext(Context);

  const history = useHistory();

  const handleClick = async () => {
    const postLoginInfo = await axiosRequest(URL_LOGIN, 'POST', {
      email: emailLogin,
      password: passwordLogin,
    });
    if (
      postLoginInfo.message !== undefined
      && postLoginInfo.message.includes('404')
    ) return setVerify(true);
    const { name, email, role, token } = postLoginInfo.data;
    localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
    if (postLoginInfo.status === STATUS_CODE_OK) {
      history.push('/customer/products');
    }
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
