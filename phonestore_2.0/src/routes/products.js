const express = require('express');
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");
const indexController = require('../controllers/indexController');


/* GET home page. */

router.get('/productDetail/:id', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productCreate_form', productController.createForm)
router.post('/productCreate_form',upload.single("image"), productController.store); 


router.get('/productEdit/:id', productController.edit )
router.put('/productEdit/:id',upload.array("image"), productController.update)


router.get('/dashboard', productController.dashboard )

router.delete(`/delete/:id`, productController.destroy);

module.exports = router;