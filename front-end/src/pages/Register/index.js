import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import validateEmail from '../../helpers/data';

import Input from '../../components/GenericInput';

import { axiosRequest } from '../../services/index';
import { URL_REGISTER, MIN_LENGTH_LOGIN } from '../../helpers/constants';

const STATUS_CODE_CREATED = 201;

function Register() {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [disabledRegister, setDisabledRegister] = useState(true);

  useEffect(() => {
    const nameCheck = nameRegister.length >= 2 * MIN_LENGTH_LOGIN;
    const emailCheck = validateEmail(emailRegister);
    const passwordCheck = passwordRegister.length >= MIN_LENGTH_LOGIN;
    if (nameCheck && emailCheck && passwordCheck) {
      setDisabledRegister(false);
    } else {
      setDisabledRegister(true);
    }
  }, [nameRegister, emailRegister, passwordRegister]);

  const history = useHistory();

  const handleClick = async () => {
    const postRegisterInfo = await axiosRequest(URL_REGISTER, 'POST', {
      name: nameRegister,
      email: emailRegister,
      password: passwordRegister,
      role: 'customer',
    });
    if (postRegisterInfo.message !== undefined
      && (postRegisterInfo.message.includes('400')
      || postRegisterInfo.message.includes('409'))
    ) return;
    const { name, email, role, token } = postRegisterInfo.data;
    localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
    if (postRegisterInfo.status === STATUS_CODE_CREATED) {
      history.push('/customer/products');
    }
  };

  return (
    <div>
      {/* Nome */}
      <h2>Cadastro</h2>
      <form action="">
        <Input
          htmlFor="common_register__input-name"
          type="text"
          dataTestId="common_register__input-name"
          placeholder="Seu nome"
          value={ nameRegister }
          onChange={ ({ target }) => setNameRegister(target.value) }
        />
        {/* Email */}
        <Input
          htmlFor="common_register__input-email"
          type="email"
          dataTestId="common_register__input-email"
          placeholder="seu email@trybeer.com.br"
          value={ emailRegister }
          onChange={ ({ target }) => setEmailRegister(target.value) }
        />
        {/* Password */}
        <Input
          htmlFor="common_register__input-password"
          type="password"
          dataTestId="common_register__input-password"
          placeholder="********"
          value={ passwordRegister }
          onChange={ ({ target }) => setPasswordRegister(target.value) }
        />
        {/* Botão Login */}
        <button
          type="button"
          disabled={ disabledRegister }
          onClick={ () => handleClick() }
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
        <p data-testid="common_register__element-invalid_register" />
      </form>
    </div>
  );
}

export default Register;
