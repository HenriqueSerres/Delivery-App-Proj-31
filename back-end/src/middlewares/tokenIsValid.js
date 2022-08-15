const jwt = require('jsonwebtoken');
const { JWT_SUPER_SECRET } = require('../constants');
require('dotenv').config();

const tokenIsValid = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }    

    const decoded = jwt.verify(token, JWT_SUPER_SECRET);

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