const { salesProductService } = require('../services');

 const getAll = async (_req, res) => {
  const sales = await salesProductService.getAll();
  return res.status(201).json(sales);
}; 

const insertSales = async (req, res) => {
    const newSale = [...req.body];
    const sales = await salesProductService.insertSales(newSale);
    res.status(201).json(sales); 
};

module.exports = {
  insertSales,
   getAll,
};
