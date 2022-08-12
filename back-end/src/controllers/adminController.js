const adminService = require('../services/adminService');

const registerUserAdm = async (req, res, next) => {
  try {
    const bodyContent = req.body;
    const newUser = await adminService.registerUserAdm(bodyContent);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await adminService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await adminService.removeUser(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  removeUser,
  registerUserAdm,
};