const express = require('express');
const registerController = require('../../controllers/registerController');
const registerIsValid = require('../../middlewares/registerIsValid');
const userAlreadyExists = require('../../middlewares/userAlreadyExists');

const registerRoutes = express.Router();

registerRoutes.post('/', registerIsValid, userAlreadyExists, registerController.register);

module.exports = registerRoutes;