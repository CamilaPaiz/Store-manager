const Joi = require('joi');

const addNameSchema = Joi.object({ name: Joi.string().min(5).required() });
const addNewSale = Joi.array().items(
  Joi.object({
    productId: Joi.number().min(1).required().label('productId'),
    quantity: Joi.number().min(1).required().label('quantity')
      .messages({
        'any.required': '{{#label}} is required',
        'any.min': '{{#label}} must be greater than or equal to 1',
      }),
  }),
); // .min(1) aqui  aceita array com pelo menos 1 elemento
  
module.exports = {
  addNameSchema,
  addNewSale,
};
