const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.findById);

module.exports = router;