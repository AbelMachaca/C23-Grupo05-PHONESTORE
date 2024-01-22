const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check, body } = require("express-validator");
const bcrypt = require("bcryptjs");

const validateLogin = [
  check("email")
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("Debes completar un email valido")
    .bail()
    .custom((value) => {
      const dir = path.join(__dirname, "../data/users.json");
      let products = JSON.parse(fs.readFileSync(dir, "utf-8"));
      const user = products.find((elemento) => elemento.email == value);
      return user ? true : false;
    }).withMessage('No existe el usuario'),
  body("password")
    .notEmpty()
    .withMessage("El campo no puede estar vacio")
    .bail()
    .custom((value, { req }) => {
      console.log("password:", value);
      const user = users.find((elemento) => elemento.email == req.body.email);
      console.log("user:", user);
      console.log("user-password:", user.password);
      return bcrypt.compareSync(value, user.password);
    })
    .withMessage("La contraseña no es correcta"),
];

/* GET users listing. */
router.get("/login", userController.login);
router.post("/login", validateLogin, userController.processlogin);
router.get("/register", userController.register);

module.exports = router;
