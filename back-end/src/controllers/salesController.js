const salesService = require('../services/salesService');

const findSellerSales = async (req, res) => {
  const { data: { id, role } } = req.userData;
  const sales = await salesService.filterAllSales(id, role);
  return res.status(200).json(sales);
};

module.exports = {
  findSellerSales,
};
