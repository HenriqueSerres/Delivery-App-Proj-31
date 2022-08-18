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

const getAllSellers = async (req, res, next) => {
  try {
    const sellers = await salesService.getAllSellers();
    return res.status(200).json(sellers);
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

const upDateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.user.data;
    const { status } = req.body;
    const editedOrder = await salesService.upDateOrder({ id, role, status });
    return res.status(200).json(editedOrder);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  findOrders,
  addNewOrder,
  getAllSellers,
  findAnUserOrder,
  upDateOrder,
};
