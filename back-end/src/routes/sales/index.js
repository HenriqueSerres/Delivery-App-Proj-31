const express = require('express');
const salesController = require('../../controllers/salesController');
const tokenIsValid = require('../../middlewares/tokenIsValid');

const salesRoutes = express.Router();

salesRoutes.get('/', tokenIsValid, salesController.findOrders);
salesRoutes.get('/sallers/names', tokenIsValid, salesController.getAllSallers);
salesRoutes.post('/', tokenIsValid, salesController.addNewOrder);
salesRoutes.get('/:id', tokenIsValid, salesController.findAnUserOrder);

module.exports = salesRoutes;
