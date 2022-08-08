const express = require('express');
const salesController = require('../../controllers/salesController');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.findSellerSales);

module.exports = salesRoutes;
