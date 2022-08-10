const { Sales, User, Products } = require('../database/models');
const identifyUser = require('../utils/indentifyUser');

const filterAllOrders = async (id, role) => {
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

const filterUserOrderbyId = async (orderId, data) => {
  const { id, role } = data;
  const queryParameters = identifyUser(id, role);
  queryParameters.id = orderId;
  const certainOrder = await Sales.findOne({
    where: queryParameters,
    attributes: { exclude: ['userId', 'sallerId'] },
    include: [
      { model: User, as: 'saller', attributes: { exclude: ['password', 'email'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'email'] } },
      { model: Products, as: 'products', through: { attributes: [] } },
    ],
  });
  return certainOrder;
};

module.exports = {
  filterAllOrders,
  filterUserOrderbyId,
};