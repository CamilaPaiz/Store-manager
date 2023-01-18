const salesModel = require('../models/salesModel');

const findById = async (id) => {
  const sale = await salesModel.findById(id);
  
  return { type: null, sale };
};

const getAll = async () => {
  const sale = await salesModel.getAll();

  return sale;
};

const insertSale = async (newSale) => {
  const sale = await salesModel.insertProduct(newSale); // cadastra
  /* console.log(newProduct); */ // retorna dados com chave insertId
 
  return { sale };
};

module.exports = {
  findById,
  getAll,
  insertSale,
};
