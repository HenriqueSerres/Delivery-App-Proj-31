const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('../routes');
const middlewares = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.resolve(__dirname, '..', 'database', 'models', 'Images')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routes);
app.use(middlewares.errorMiddleware);

module.exports = app;
