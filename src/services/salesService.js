const camelize = require('camelize');  
const salesModel = require('../models/salesModel');

const findById = async (id) => {
  const sale = await salesModel.findById(id);

  if (sale.length === 0) return { type: 404, message: 'Sale not found' };
  console.log(sale);
  return camelize({ sale });
};

const getAll = async () => {
  const sale = await salesModel.getAll();
  return camelize(sale);
};

/* const insertSale = async (newSale) => {
  const sale = await salesModel.insertSales(newSale);
  return { sale };
};
 */
module.exports = {
  findById,
  getAll,
  /* insertSale, */
};
