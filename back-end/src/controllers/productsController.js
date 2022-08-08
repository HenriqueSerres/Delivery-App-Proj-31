const productService = require('../services/productsService');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
};