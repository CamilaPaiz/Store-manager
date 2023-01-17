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

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.insertProduct(name);
  
  if (product.type) {
    return res.status(422).json({ message: product.message });
  }
  res.status(201).json(product);
};

/* const insertSales = async (req, res) => {
  const registerSale = req.body; // obj com os itens
  const sales = await productsService.insertSales(registerSale); // lista das vendas
  return res.status(201).json(sales);
}; */
 
module.exports = {
  getAll,
  findById,
  insertProduct,
  /* insertSales, */
};