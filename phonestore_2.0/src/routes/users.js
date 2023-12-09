const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
router.get('/ingresar', userController.login);
router.get('/registrarme', userController.register);

module.exports = router;