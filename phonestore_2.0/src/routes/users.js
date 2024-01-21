const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userSessionValidate = require('../middleware/userSessionValidate');

/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', userController.processLogin);
router.get('/register', userController.register);
router.post('/register', userController.createUser);
router.get('userUpadate/:id', userSessionValidate, userController.edit)
router.post('userUpdate/:id', userSessionValidate, userController.update)


module.exports = router;