const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { User, Sales, Products } = require('../database/models');

const routes = Router();

const SUPER_SECRET_JWT = 'super-secret-94527';

const generateJwtToken = (validity, paylod, superSecret) => {
  const jwtConfig = {
    expiresIn: validity,
    algorithm: 'HS256',
  };
  return jwt.sign({ data: paylod }, superSecret, jwtConfig);
};

const validateJwtToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
    // return next({ code: 401, message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, SUPER_SECRET_JWT);
    req.userData = { ...decoded };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
    // next({ code: 401, message: 'Expired or invalid token' });
  }
};

routes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({
    where: {
      email,
      password,
    },
    attributes: { exclude: ['password'] },
  });
  const token = generateJwtToken('7d', result, SUPER_SECRET_JWT);
  res.status(200).json({ ...result.dataValues, token });
});

routes.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const [response, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, email, password, role },
  });
  const user = response.dataValues;
  if (created === false) {
    return res.status(409).json({ message: 'User already exists !' });
  }
  if (Object.keys(user).includes('password')) {
    delete user.password;
  }
  res.status(200).json(user);
});

routes.get('/products', validateJwtToken, async (_req, res) => {
  const result = await Products.findAll();
  res.status(200).json(result);
});

const identifyUser = (genericUserId, role) => {
  const queryParameters = {};
  switch (role) {
    case 'customer':
      queryParameters.userId = genericUserId;
      break;
    
    case 'seller':
      queryParameters.sellerId = genericUserId;
      break;
  
    default:
      queryParameters.id = '';
      break;
  }
  return queryParameters;
};

routes.get('/orders', validateJwtToken, async (req, res) => {
  const { data: { id, role } } = req.userData;
  const queryParameters = identifyUser(id, role);
  const result = await Sales.findAll({
    where: queryParameters,
    attributes: { exclude: ['userId', 'sallerId'] },
    include: [
      { model: User, as: 'saller', attributes: { exclude: ['password', 'email'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'email'] } },
      { model: Products, as: 'products', through: { attributes: [] } },
    ],
  });
  res.status(200).json(result);
});

routes.get('/orders/:id', validateJwtToken, async (req, res) => {
  const { userData: { data }, params: { id } } = req;
  const user = { ...data };
  const queryParameters = identifyUser(user.id, user.role);
  queryParameters.id = id;
  const result = await Sales.findAll({
    where: queryParameters,
    attributes: { exclude: ['userId', 'sallerId'] },
    include: [
      { model: User, as: 'saller', attributes: { exclude: ['password', 'email'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'email'] } },
      { model: Products, as: 'products', through: { attributes: [] } },
    ],
  });
  res.status(200).json(result);
});

routes.get('/sellers/names', validateJwtToken, async (_req, res) => {
  const result = await User.findAll({
    where: { role: 'seller' },
    attributes: ['name'],
  });
  const sellersNames = result.map(({ name }) => name);
  res.status(200).json({ sellersNames });
});

module.exports = routes;
