const { User } = require('../database/models');
const handleError = require('../utils/handleError');

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
};