const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message, products } = await productsService.findById(id);
  if (type) return res.status(type).json(message);
  return res.status(200).json(products);
};

module.exports = {
  getAll,
  findById,
};