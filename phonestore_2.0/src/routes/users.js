const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const uploadFile = require("../validations/ImageUploader");
const registerValidation = require("../validations/validationRegister");
const passport = require('passport'); // Agrega Passport
const rememberMeValidator =require("../middleware/rememberMeValidator")
const updateValidator = require('../validations/userUpdateValidator');
const loginValidation = require('../validations/validationLogin')
require('dotenv').config();
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


//----------------------------------------------

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../database/models');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.Usuario.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});



passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTE_ID,
      clientSecret: process.env.CLIENTE_SECRETO,
      callbackURL: 'http://localhost:3030/auth/google/callback',
      passReqToCallback:true
    },
    (request, accessToken, refreshToken, profile, done) => {
      // Verifica si el usuario ya existe en la base de datos
      db.Usuario.findOne({ where: { googleId: profile.id } })
        .then((existingUser) => {
          if (existingUser) {
            // Si el usuario ya existe, devuelve el usuario existente
            done(null, existingUser);
          } else {
            console.log("Google ID:", profile.id);

            // Si el usuario no existe, crea un nuevo usuario en la base de datos
            const newUser = {
              nombre: profile.displayName,
              email: profile.emails[0].value,
              apellido: 'personalizar', // Campo apellido personalizado
              password: '12345678a', // Campo password personalizado
              id_entidad_usuario: 1, // Campo id_entidad_usuario personalizado
              googleId: profile.id,
              imagen_usuario: 'predeterminado.webp',
            };

            db.Usuario.create(newUser)
              .then((user) => {
                done(null, user);
              })
              .catch((err) => {
                done(err, null);
              });
          }
        })
        .catch((err) => {
          done(err, null);
        });
    }
  )
);


// Inicializa Passport y sesión de Passport
router.use(passport.initialize());
router.use(passport.session());





// Ruta para iniciar sesión con Google
router.get(
"/auth/google",
passport.authenticate("google", { scope: [ "email","profile"] })
);

// Ruta de retorno de Google después de la autenticación
router.get(
"/auth/google/callback",
passport.authenticate("google", {
  successRedirect: "/success",
  failureRedirect: "/login" })
);

router.get('/success' , userController.processlogin);



//----------------------------------------------

const multer  = require('multer');

const path = require("path");



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname,"../","../public/images/users"))
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

//imagen de perfil
router.get('/photo/:id', userController.showPhoto)

module.exports = router;
