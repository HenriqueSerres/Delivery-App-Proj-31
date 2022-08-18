const cryptoJs = require('crypto-js');
const { User } = require('../database/models');
const generateJWT = require('../utils/generateToken');

const register = async (name, email, password, role) => {
  const hash = cryptoJs.MD5(password).toString();
  const response = await User.create({ name, email, password: hash, role });
  const user = response.dataValues;
  if (Object.keys(user).includes('password')) {
    delete user.password;
  }  
  const token = generateJWT('10d', user);
  return {
    ...user,
    token,
  };
};

module.exports = {
  register,
};