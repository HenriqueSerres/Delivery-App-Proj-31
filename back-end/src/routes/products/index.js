const express = require('express');
const productsController = require('../../controllers/productsController');
const tokenIsValid = require('../../middlewares/tokenIsValid');

const productsRoutes = express.Router();

productsRoutes.get('/', tokenIsValid, productsController.getAllProducts);

module.exports = productsRoutes;