const JWT_SUPER_SECRET  = require('../../constants');
const { User } = require('../models');
const generateJWT = require('../utils/generateToken');
const handleError = require('../utils/handleError');

const loginUser = async (email, password) => {
  
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });
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