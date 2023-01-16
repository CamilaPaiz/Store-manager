const Joi = require('joi');

const addNameSchema = Joi.object({ name: Joi.string().min(5).required() });

module.exports = {
  addNameSchema,
};
