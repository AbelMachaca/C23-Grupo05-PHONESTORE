const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sessionValidate = require('../middleware/sessionValidate');
const userSessionValidate = require('../middleware/userSessionValidate');

/* GET users listing. */
router.get('/login', userSessionValidate, userController.login);
router.post('/login', userController.processLogin);
router.get('/register', userController.register);
router.post('/register', userController.createUser);
router.get('profile,',userSessionValidate, userController.profile);

module.exports = router;