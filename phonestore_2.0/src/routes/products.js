const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")


/* GET home page. */

router.get('/productDetail', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productEdit', productController.edit )

module.exports = router;