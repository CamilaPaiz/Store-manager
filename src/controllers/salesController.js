const { salesService } = require('../services');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { type, sale, message } = await salesService.findById(id);
  if (type) return res.status(type).json({ message }); // em caso de erro
  return res.status(200).json(sale); // em caso de sucesso
};

module.exports = {
  getAll,
   findById, 
};