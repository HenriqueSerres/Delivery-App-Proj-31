const { Sales, User, Products } = require('../database/models');

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

const filterAllSales = async (id, role) => {
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
  return result;
};

module.exports = {
  filterAllSales,
};