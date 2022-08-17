const salesService = require('../services/salesService');

const findOrders = async (req, res, next) => {
  try {
    const { id, role } = req.user.data;
    const sales = await salesService.filterAllOrders(id, role);
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

const addNewOrder = async (req, res, next) => {
  try {
    const { id, role } = req.user.data;
    const newOrder = await salesService.addNewOrder(id, role, req.body);
  return res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

const getAllSallers = async (req, res, next) => {
  try {
    const sallers = await salesService.getAllSallers();
    return res.status(200).json(sallers);
  } catch (error) {
    next(error);
  }
};
    
const findAnUserOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.user;
    const userOrders = await salesService.filterUserOrderbyId(id, data);
    return res.status(200).json(userOrders);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findOrders,
  addNewOrder,
  getAllSallers,
  findAnUserOrder,
};
