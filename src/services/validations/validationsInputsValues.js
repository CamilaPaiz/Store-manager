const { addNameSchema } = require('./schemas');
/* const { productsModel } = require('../../models'); */

const validateInputValues = (name) => {
  const { error } = addNameSchema.validate({ name });
 
  if (error) return { type: 422, message: '"name" length must be at least 5 characters long' };
};

module.exports = {
  validateInputValues,
};