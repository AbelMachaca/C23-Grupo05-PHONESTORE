const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile = require('../validations/ImageUploader');
const registerValidation = require('../validations/validationRegister');


/* GET users listing. */
router.get('/login', userController.login);

router.get('/register', userController.formRegister);
router.post('/register', uploadFile.single('image'), registerValidation, userController.register);

module.exports = router;