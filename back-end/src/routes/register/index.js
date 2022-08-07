const express = require('express');
const registerController = require('../../database/controllers/registerController');
const registerIsValid = require('../../database/middlewares/registerIsValid');

const registerRoutes = express.Router();

registerRoutes.post('/', registerIsValid, registerController.register);

module.exports = registerRoutes;