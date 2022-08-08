const { Router } = require('express');
const mockRoutes = require('./mockRoutes');
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const sellerRoutes = require('./seller');

const routes = Router();

routes.use('/mock', mockRoutes);
routes.use('/login', loginRoutes);
routes.use('/register', registerRoutes);
routes.use('/seller', sellerRoutes);

module.exports = routes;
