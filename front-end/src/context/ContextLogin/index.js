import { useEffect, useState } from 'react';
import validateEmail from '../../helpers/data';
import { MIN_LENGTH_LOGIN } from '../../helpers/constants';

const ContextLogin = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);

  useEffect(() => {
    const emailCheck = validateEmail(email);
    const passwordCheck = password.length >= MIN_LENGTH_LOGIN;
    if (emailCheck && passwordCheck) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
