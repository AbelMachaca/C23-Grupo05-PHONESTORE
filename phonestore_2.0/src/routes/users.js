const express = require('express');
const router = express.Router();
const multer  = require('multer');
const userController = require('../controllers/userController');
const path = require("path");

const updateValidator = require('../validations/userUpdateValidator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname,"../","../public/images/usersProfile"))
},
    filename:(req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
}
})
const upload = multer({ storage })

/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.register);

//perfil de usuario
router.get('/profile/:id', userController.show)

//actualización de datos del usuario
router.get('/userUpdate/:id', userController.edit);
router.put('/userUpdate/:id',upload.single("image"), updateValidator, userController.update);

module.exports = router;