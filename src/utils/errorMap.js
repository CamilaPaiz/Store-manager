const errorTypes = [
  { type: 400, message: '""productId" is required" }' },
  { type: 400, message: '"quantity" is required' },
  { type: 422, message: '"quantity" must be greater than or equal to 1' },
  { type: 404, message: 'Product not found' },
  
];

const getError = (message) => errorTypes.find((err) => err.message === message);

module.exports = getError;
