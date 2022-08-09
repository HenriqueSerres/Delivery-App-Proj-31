import { useEffect, useState } from 'react';
import validateEmail from '../../helpers/data';
import { MIN_LENGTH_LOGIN } from '../../helpers/constants';

const ContextLogin = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);

  useEffect(() => {
    const emailCheck = validateEmail(emailLogin);
    const passwordCheck = passwordLogin.length >= MIN_LENGTH_LOGIN;
    emailCheck && passwordCheck ? setDisabledLogin(false) : setDisabledLogin(true);
  }, [emailLogin, passwordLogin]);

  const contextLoginObj = {
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin,
    disabledLogin
  };

  return { contextLoginObj };
};

export default ContextLogin;
