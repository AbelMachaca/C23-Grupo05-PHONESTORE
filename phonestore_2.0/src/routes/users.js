const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const uploadFile = require("../validations/ImageUploader");
const registerValidation = require("../validations/validationRegister");

const rememberMeValidator =require("../middleware/rememberMeValidator")
const updateValidator = require('../validations/userUpdateValidator');
const loginValidation = require('../validations/validationLogin')

const {body, check} = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require("fs")

const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
    const json = JSON.parse(file);
    return json;
  };
  
  const setJson = (array, fileName) => {
    const json = JSON.stringify(array);
    fs.writeFileSync(`${__dirname}/../data/${fileName}.json`, json, 'utf-8');
  };
  const users = getJson("users");



// const validateLogin = [
//     body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
//     .custom((value, {req} )=> {
       
//         const user = users.find(elemento => elemento.email == req.body.email)
        
//         return bcrypt.compareSync(value, user.password);
//     }).withMessage("La contraseña no es correcta"),
//     body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
//     .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electronico").bail()
//     .custom(value => {
//         console.log("value:",value);        
//         const user = users.find(elemento => elemento.email == value);
//         return user ? true : false
//     }).withMessage("El usuario no existe"),
// ]

const multer  = require('multer');

const path = require("path");



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
router.get("/login", userController.login);
router.post("/login",loginValidation,userController.processlogin);
router.get('/logout', userController.logout)
router.get("/register", userController.formRegister);
router.post(
    "/register",
    uploadFile.single("imagen_usuario"),
    registerValidation,
    userController.register
);

//perfil de usuario
router.get('/profile/:id', userController.show)

//actualización de datos del usuario
router.get('/userUpdate/:id', userController.edit);
router.put('/userUpdate/:id',upload.single('imagen_usuario'), updateValidator, userController.update);


module.exports = router;
