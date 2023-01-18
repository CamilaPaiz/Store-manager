/*   const Joi = require('joi');   */
const { salesModel } = require('../models');
const salesProductModel = require('../models/salesProductModel');
/* const salesModel = require('../models/salesProductModel'); */
/* const { addNewSale } = require('./validations/schemas');  
const errorTypes = require('../utils/errorMap'); */

const getAll = async () => {
  const sale = await salesProductModel.getAll();

  return sale;
};

const insertSales = async (newSaleArray) => {
  // lista ser inserida
 /*    const addNewSaleSchema = Joi.array().items(addNewSale);
  const { error } = addNewSaleSchema.validate(newSaleArray);
  if (error) {
    return errorTypes(error.message);
  } 
  */
  const sale = await salesModel.insertSales({ date: new Date() }); // saleId
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
