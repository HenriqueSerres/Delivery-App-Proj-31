const express = require('express');
const registerController = require('../../controllers/registerController');
const registerIsValid = require('../../middlewares/registerIsValid');

const registerRoutes = express.Router();

registerRoutes.post('/', registerIsValid, registerController.register);

module.exports = registerRoutes;