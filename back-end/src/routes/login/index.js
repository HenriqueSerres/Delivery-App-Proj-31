const express = require('express');
const loginController = require('../../database/controllers/loginController');
const loginIsValid = require('../../database/middlewares/loginIsValid');

const loginRoutes = express.Router();

loginRoutes.post('/', loginIsValid, loginController.loginUser);

module.exports = loginRoutes;