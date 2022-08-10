const jwt = require('jsonwebtoken');
require('dotenv').config();

const senhasecreta = process.env.JWT_SECRET;

const tokenIsValid = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }    

    const decoded = jwt.verify(token, senhasecreta);

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