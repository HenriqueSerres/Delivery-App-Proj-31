const salesService = require('../services/salesService');

const findOrders = async (req, res) => {
  const { id, role } = req.user.data;
  const sales = await salesService.filterAllOrders(id, role);
  return res.status(200).json(sales);
};

module.exports = {
  findOrders,
};
