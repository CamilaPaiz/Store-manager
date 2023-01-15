const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message, product } = await productsService.findById(id);
  if (type) return res.status(type).json({ message }); // em caso de erro
  return res.status(200).json(product); // em caso de sucesso
};

module.exports = {
  getAll,
  findById,
};