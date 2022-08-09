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
    attributes: { exclude: ['userId', 'sallerId'] },
    include: [
      { model: User, as: 'saller', attributes: { exclude: ['password', 'email'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'email'] } },
      { model: Products, as: 'products', through: { attributes: [] } },
    ],
  });
  return result.dataValues;
};

const addNewOrder = async (id, role, body) => {
  const { sallerId, products, ...payload } = body;
  console.log('XXXXXX');
  console.log(role);
  if (role !== 'customer') throw handleError(401, 'Unauthorized');
  const order = { userId: id, ...payload };
  const t = await sequelize.transaction();
  try {
    const newOrder = await Sales.create(order, { transaction: t });
    await SalesProducts.bulkCreate(products
      .map((product) => ({ sallerId, productId: product.id, quantity: product.quantity })),
      { transaction: t });
    await t.commit();
    return newOrder;
  } catch (error) {
    await t.rollback();
    console.log(error.message);
  }  
};

const getAllSallers = async () => {
  const sallers = await User.findAll({
    where: { role: 'seller' },
    attributes: ['id', 'name'],
  });
  return sallers;
};

module.exports = {
  filterAllOrders,
  addNewOrder,
  getAllSallers,
};