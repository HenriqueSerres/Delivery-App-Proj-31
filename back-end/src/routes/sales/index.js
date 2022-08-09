const express = require('express');
const salesController = require('../../controllers/salesController');
const tokenIsValid = require('../../middlewares/tokenIsValid');

const salesRoutes = express.Router();

salesRoutes.get('/', tokenIsValid, salesController.findOrders);

module.exports = salesRoutes;
