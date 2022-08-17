const jwt = require('jsonwebtoken');
const extractToken = require('../utils/extractToken');
require('dotenv').config();

const tokenIsValid = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const jwtSuperSecret = extractToken(`${__dirname}/../../jwt.evaluation.key`);

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }    

    const decoded = jwt.verify(token, jwtSuperSecret);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error.message);
    if (error.message === 'jwt malformed') {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};

module.exports = tokenIsValid;
