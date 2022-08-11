const express = require('express');
const adminController = require('../../controllers/adminController');
const registerController = require('../../controllers/registerController');
const adminCheck = require('../../middlewares/adminCheck');
const registerIsValid = require('../../middlewares/registerIsValid');
const tokenIsValid = require('../../middlewares/tokenIsValid');

const adminRoutes = express.Router();

adminRoutes.post('/', tokenIsValid, adminCheck, registerIsValid, registerController.register);
adminRoutes.get('/', tokenIsValid, adminCheck, adminController.getAllUsers);
adminRoutes.delete('/:id', tokenIsValid, adminCheck, adminController.removeUser);

module.exports = adminRoutes;