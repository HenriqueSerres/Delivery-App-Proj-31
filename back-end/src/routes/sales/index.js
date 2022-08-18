const express = require('express');
const salesController = require('../../controllers/salesController');
const tokenIsValid = require('../../middlewares/tokenIsValid');

const salesRoutes = express.Router();

salesRoutes.get('/', tokenIsValid, salesController.findOrders);
salesRoutes.get('/sellers/names', tokenIsValid, salesController.getAllSellers);
salesRoutes.post('/', tokenIsValid, salesController.addNewOrder);
salesRoutes.get('/:id', tokenIsValid, salesController.findAnUserOrder);
salesRoutes.put('/:id', tokenIsValid, salesController.upDateOrder);

module.exports = salesRoutes;
