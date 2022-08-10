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
  findAnUserOrder,
};
