const { Router } = require('express');
const mockRoutes = require('./mockRoutes');
const loginRoutes = require('./login');

const routes = Router();

routes.use('/mock', mockRoutes);
routes.use('/login', loginRoutes);

module.exports = routes;
