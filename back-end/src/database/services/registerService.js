const { User } = require('../models');
const handleError = require('../utils/handleError');

const register = async (name, email, password, role) => {
  
  const [response, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, email, password, role },
  });
  const user = response.dataValues;
  if (created === false) {
    throw handleError(409, 'User already exists !');
  }
  if (Object.keys(user).includes('password')) {
    delete user.password;
  }
  return user;
};

module.exports = {
  register,
};