const validateSaleQuantity = (req, res, next) => {
  const { quantity } = req.body;

  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

module.exports = {
  validateSaleQuantity,
};
