const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/apiUserController');

router.get('/users', apiUserController.list);
router.get('/users/:id', apiUserController.show);
router.put('/users/:id', apiUserController.update); 

module.exports = router;