const fs = require('fs');

const extractToken = (filepath) => {
  try {
    const secretJwt = fs.readFileSync(filepath, 'utf-8');
    return secretJwt;
  } catch (error) {
    console.error(`ERROR: Erro ao tentar Extrair secret JWT do arquivo ${filepath}`);
    return process.env.JWT_SECRET;
  }
};

module.exports = extractToken;
