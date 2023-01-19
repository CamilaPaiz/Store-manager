const { salesModel, productsModel } = require('../models');
const salesProductModel = require('../models/salesProductModel');
/* const salesModel = require('../models/salesProductModel'); */
 const { addNewSale } = require('./validations/schemas');  
const errorTypes = require('../utils/errorMap'); 

const getAll = async () => {
  const sale = await salesProductModel.getAll();
 
  return sale;
};

const insertSales = async (newSaleArray) => {
  // lista ser inserida
  const { error } = addNewSale.validate(newSaleArray);
  if (error) {
    return errorTypes(error.message);
  }

  const validation = await Promise.all(newSaleArray // promise all espera array de promise
    .map(async (item) => {
      const product = await productsModel.findById(item.productId);
      return product; // retorno do array com undefined ou produto encontrado
    }));
  if (validation.includes(undefined)) return errorTypes('Product not found');

  const sale = await salesModel.insertSales({ date: new Date() });
  console.log(sale);
   await Promise.all(newSaleArray.map(async (item) => {
    const newItem = { saleId: sale.id, ...item };
    await salesProductModel.insertSales(newItem);
    return newItem;
  }));
  return { id: sale.id, itemsSold: newSaleArray };
};

module.exports = {
  insertSales,
  getAll,
};
