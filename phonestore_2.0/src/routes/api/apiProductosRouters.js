const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductos');

router.get('/products', apiProductsController.list);
router.get('/products/:id', apiProductsController.show);

module.exports = router;