const sellerService = require('../services/sellerService');

const findSellerSales = async (req, res) => {
  const { data: { id, role } } = req.userData;
  const sales = await sellerService.filterAllSales(id, role);
  return res.status(200).json(sales);
};

module.exports = {
  findSellerSales,
};
