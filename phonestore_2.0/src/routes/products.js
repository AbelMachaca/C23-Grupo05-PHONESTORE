const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")


/* GET home page. */

router.get('/productDetail', productController.detail);

router.get('/productCart', productController.cart)


module.exports = router;