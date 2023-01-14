const productsModel = require('../models/productsModel');

// sem regras de negócio para esta função
const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

// se tiver sucesso 200/retorna produto,caso nao tenha 404/"Product not found" 
const findById = async (id) => {
  const products = await productsModel.findById(id);
  if (products) return { type: null, products };
  return { type: 404, message: 'Product not found' };
};

module.exports = {
  getAll,
  findById,
};