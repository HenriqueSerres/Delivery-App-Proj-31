const { Router } = require('express');
const mockRoutes = require('./mockRoutes');

const routes = Router();

routes.use('/mock', mockRoutes);

module.exports = routes;
