const express = require('express');
const sellerController = require('../../controllers/sellerController');

const sellerRoutes = express.Router();

sellerRoutes.get('/orders', sellerController.findSellerSales);

module.exports = sellerRoutes;
