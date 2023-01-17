const { addNameSchema } = require('./schemas');
/* const { productsModel } = require('../../models'); */

const validateInputValues = (name) => {
  const { error } = addNameSchema.validate({ name });
  console.log(error);
   if (error) return { type: 422, message: '"name" length must be at least 5 characters long' };
    return { type: null, message: '' };   
};

module.exports = {
  validateInputValues,
};