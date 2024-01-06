const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")


/* GET home page. */

router.get('/productDetail', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productCreateForm', productController.createForm)

router.get('/productEdit', productController.edit )

router.get('/dashboard', productController.dashboard )

router.delete(`/delete/:id`, productController.destroy);

module.exports = router;