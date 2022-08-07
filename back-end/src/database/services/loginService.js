const { JWT_SUPER_SECRET } = require('../../constants');
const { User } = require('../models');
const generateJWT = require('../../utils/generateToken');
const handleError = require('../../utils/handleError');
const cryptoJs = require('crypto-js');

const loginUser = async (email, password) => {
  const hash = cryptoJs.MD5(password).toString();
  const user = await User.findOne({
    where: { email, password: hash },
    attributes: { exclude: ['password'] },
  });

  console.log(user);
  if (!user) {
    throw handleError('400', 'User not exists');
  }
  const userData = user.dataValues;
  const token = generateJWT('10d', userData, JWT_SUPER_SECRET);
  return {
    ...userData,
    token
  };
};

module.exports = {
  loginUser,
};