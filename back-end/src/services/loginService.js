const cryptoJs = require('crypto-js');
const { User } = require('../database/models');
const generateJWT = require('../utils/generateToken');
const handleError = require('../utils/handleError');

const loginUser = async (email, password) => {
  const hash = cryptoJs.MD5(password).toString();
  const user = await User.findOne({
    where: { email, password: hash },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    throw handleError('404', 'User not exists');
  }
  const userData = user.dataValues;
  const token = generateJWT('10d', userData);
  return {
    ...userData,
    token,
  };
};

module.exports = {
  loginUser,
};