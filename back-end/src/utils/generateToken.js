const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (validity, paylod, superSecret) => {
  const jwtConfig = {
    expiresIn: validity,
    algorithm: 'HS256',
  };
  return jwt.sign({ data: paylod }, superSecret, jwtConfig);
};

module.exports = generateJWT;