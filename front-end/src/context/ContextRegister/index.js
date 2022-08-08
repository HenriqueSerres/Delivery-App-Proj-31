import { useEffect, useState } from 'react';
import validateEmail from '../../helpers/data';
import { MIN_LENGTH_LOGIN } from '../../helpers/constants';

const ContextLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const nameCheck = name.length >= 2 * MIN_LENGTH_LOGIN;
    const emailCheck = validateEmail(email);
    const passwordCheck = password.length >= MIN_LENGTH_LOGIN;
    emailCheck && passwordCheck ? setDisabled(false) : setDisabled(true);
  }, [email, password]);

  const contextRegisterObj = {
    setName,
    name,
    setEmail,
    email,
    setPassword,
    password,
    disabled,
  };

  return { contextRegisterObj };
};

export default ContextLogin;
