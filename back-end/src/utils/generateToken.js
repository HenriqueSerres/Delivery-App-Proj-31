const jwt = require('jsonwebtoken');
const extractToken = require('./extractToken');
require('dotenv').config();

const generateJWT = (validity, paylod) => {
  const jwtSuperSecret = extractToken(`${__dirname}/../../jwt.evaluation.key`);
  const jwtConfig = {
    expiresIn: validity,
    algorithm: 'HS256',
  };
  return jwt.sign({ data: paylod }, jwtSuperSecret, jwtConfig);
};

module.exports = generateJWT;