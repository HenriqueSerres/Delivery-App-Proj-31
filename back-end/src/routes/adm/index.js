const express = require('express');
const adminController = require('../../controllers/adminController');
const adminCheck = require('../../middlewares/adminCheck');
const registerIsValid = require('../../middlewares/registerIsValid');
const tokenIsValid = require('../../middlewares/tokenIsValid');
const userAlreadyExists = require('../../middlewares/userAlreadyExists');

const adminRoutes = express.Router();

adminRoutes.post('/',
  tokenIsValid,
  adminCheck,
  registerIsValid,
  userAlreadyExists,
  adminController.registerUserAdm);
adminRoutes.get('/', tokenIsValid, adminCheck, adminController.getAllUsers);
adminRoutes.delete('/:id', tokenIsValid, adminCheck, adminController.removeUser);

module.exports = adminRoutes;