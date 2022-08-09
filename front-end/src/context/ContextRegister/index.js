import { useEffect, useState } from 'react';
import validateEmail from '../../helpers/data';
import { MIN_LENGTH_LOGIN } from '../../helpers/constants';

const ContextLogin = () => {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [disabledRegister, setDisabledRegister] = useState(true);

  useEffect(() => {
    const nameCheck = nameRegister.length >= 2 * MIN_LENGTH_LOGIN;
    const emailCheck = validateEmail(emailRegister);
    const passwordCheck = passwordRegister.length >= MIN_LENGTH_LOGIN;
    emailCheck && passwordCheck ? setDisabledRegister(false) : setDisabledRegister(true);
  }, [emailRegister, passwordRegister]);

  const contextRegisterObj = {
    nameRegister,
    setNameRegister,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
    disabledRegister
  };

  return { contextRegisterObj };
};

export default ContextLogin;
