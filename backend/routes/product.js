const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

// to get the details about product --- if need to post post()
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

module.exports = router;