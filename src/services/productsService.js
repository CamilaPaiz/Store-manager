const productsModel = require('../models/productsModel');
const { validateInputValues } = require('./validations/validationsInputsValues');

// sem regras de negócio para esta função
const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

// se tiver sucesso 200/retorna produto,caso nao tenha 404/"Product not found" 
const findById = async (id) => {
  const product = await productsModel.findById(id);
  if (product === undefined) return { type: 404, message: 'Product not found' };
  return { type: null, product };
};

// caso de sucesso 201 com o produto 
const insertProduct = async (name) => {
  const error = validateInputValues(name);
 
  if (error.type) {
    return error;
  }
  const newProduct = await productsModel.insertProduct(name); // cadastra
   /* console.log(newProduct); */ // retorna dados com chave insertId
   const id = newProduct.insertId;
   return { id, name };
};

const updateProduct = async (name, id) => {
  const error = validateInputValues(name);
  if (error.type) return error;

  await productsModel.updateProduct(name, id);
  const updateInfo = await productsModel.findById(id);
  if (updateInfo === undefined) return { type: 404, message: 'Product not found' };
 
  return { id: updateInfo.id, name: updateInfo.name };
};
module.exports = {
  getAll,
  findById,
  insertProduct,
  updateProduct,
};