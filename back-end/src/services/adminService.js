const cryptoJs = require('crypto-js');
const { User } = require('../database/models');
const handleError = require('../utils/handleError');
const generateJWT = require('../utils/generateToken');
const { JWT_SUPER_SECRET } = require('../constants');

const registerUserAdm = async (body) => {
  const token = generateJWT('1d', body, JWT_SUPER_SECRET);
  const { name, email, password, role } = body;
  const encryptedPass = cryptoJs.MD5(password).toString();
  const newUser = await User.create({ name, email, password: encryptedPass, role });
  const user = newUser.dataValues;
  const filteredResponse = { id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token };
  return filteredResponse;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    where: { role: ['seller', 'customer'] },
    attributes: { exclude: ['password'] },
  });
  if (!allUsers) throw handleError(404, 'Users not found');
  return allUsers;
};

const removeUser = async (id) => {
  const removed = User.destroy({ where: { id } });
  return removed;
};

module.exports = {
  getAllUsers,
  removeUser,
  registerUserAdm,
};