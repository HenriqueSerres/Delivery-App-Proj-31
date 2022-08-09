const salesService = require('../services/salesService');

const findOrders = async (req, res) => {
  const { id, role } = req.user.data;
  const sales = await salesService.filterAllOrders(id, role);
  return res.status(200).json(sales);
};

const findAnUserOrder = async (req, res) => {
  const { id } = req.params;
  const { data } = req.user;
  const userOrders = await salesService.filterUserOrderbyId(id, data);
  if (!userOrders) return res.status(404).json({ message: 'Order not found' });
  return res.status(200).json(userOrders);
};

module.exports = {
  findOrders,
  findAnUserOrder,
};
