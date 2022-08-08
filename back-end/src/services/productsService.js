const { Products } = require('../database/models');
const handleError = require('../utils/handleError');

const getAllProducts = async () => {
  const products = await Products.findAll();
  if (!products) throw handleError(404, 'Products not found');
  return products;
};

module.exports = {
  getAllProducts,
};