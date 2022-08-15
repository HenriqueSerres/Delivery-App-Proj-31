const { User } = require('../database/models');

const userAlreadyExists = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await User.findOne({ where: { email } });
  if (findUser) return res.status(409).json({ message: 'User already exists' });
  next();
};

module.exports = userAlreadyExists;