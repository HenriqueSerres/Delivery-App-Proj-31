const Sequelize = require('sequelize');
const { Sales, User, Products, SalesProducts } = require('../database/models');
const identifyUser = require('../utils/indentifyUser');
const handleError = require('../utils/handleError');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const filterAllOrders = async (id, role) => {
  const queryParameters = identifyUser(id, role);
  const result = await Sales.findAll({
    where: queryParameters,
    attributes: { exclude: ['userId', 'sellerId'] },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'email'] } },
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
    attributes: { exclude: ['userId', 'sellerId'] },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'email'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'email'] } },
      { model: Products, as: 'products', through: { attributes: [] } },
    ],
  });
  return certainOrder;
};

const addNewOrder = async (id, role, body) => {
  const saleDate = new Date();
  const { sellerId, products, ...payload } = body;
  if (role !== 'customer') throw handleError(401, 'Unauthorized');
  const order = { userId: id, sellerId, products, saleDate, ...payload };
  const t = await sequelize.transaction();
  try {
    const newOrder = await Sales.create(order, { transaction: t });
    await SalesProducts.bulkCreate(products
      .map((product) => ({ 
        saleId: newOrder.id, productId: product.id, quantity: product.quantity })),
      { transaction: t });
    await t.commit();
    return newOrder;
  } catch (error) {
    await t.rollback();
    throw handleError(400, 'Bad Request');
  }  
};

const getAllSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: ['id', 'name'],
  });
  return sellers;
};

module.exports = {
  filterAllOrders,
  addNewOrder,
  getAllSellers,
  filterUserOrderbyId,
};