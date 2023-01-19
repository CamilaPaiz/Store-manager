const { salesProductService } = require('../services');

 const getAll = async (_req, res) => {
  const sales = await salesProductService.getAll();
  return res.status(201).json(sales);
}; 

const insertSales = async (req, res) => {
    const newSale = [...req.body];
  const sales = await salesProductService.insertSales(newSale);
  if (sales.type) return res.status(sales.type).json({ message: sales.message });
    res.status(201).json(sales); 
};

module.exports = {
  insertSales,
   getAll,
};
