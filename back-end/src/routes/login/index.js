const express = require('express');
const loginController = require('../../controllers/loginController');
const loginIsValid = require('../../middlewares/loginIsValid');

const loginRoutes = express.Router();

loginRoutes.post('/', loginIsValid, loginController.loginUser);

module.exports = loginRoutes;