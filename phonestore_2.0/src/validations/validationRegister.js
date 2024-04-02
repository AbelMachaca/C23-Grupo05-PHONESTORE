
const fs = require('fs');
const db = require("../database/models")
const { body, validationResult } = require('express-validator');


const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
    const json = JSON.parse(file);
    return json;
  };
  
  const users = getJson('users');

module.exports = [
  body('name')
    .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isLength({ min: 3, max: 30 }).withMessage('El valor ingresado debe tener al menos 3 caracteres y máximo 30').bail(),
  body('apellido')
    .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isLength({ min: 3, max: 30 }).withMessage('El valor ingresado debe tener al menos 3 caracteres y máximo 30').bail(),
    body('imagen_usuario')
    .custom((value, { req }) => {
      if (req.errorValidationImage) {
          return false;
      };
      return true;
  }).withMessage("Esta imagen no tiene un formato válido"),
  body('email')
    .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isEmail().withMessage('Debe ser un correo con formato válido').bail()
    .custom(value => {
      return db.Usuario.findOne({
          where: {
              email: value
          }
      })
          .then(user => {
              if (user) {
                  return Promise.reject('El email se encuentra registrado')
              }
          })
          .catch(() => {
              return Promise.reject('El email se encuentra registrado')
          })
  }),
  body('password')
  .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isLength({ min: 8, max: 20 }).withMessage("El valor ingresado debe tener al menos 8 caracteres y máximo 20").bail()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,;'" ])[A-Za-z\d$@$!%*?&.,;'" ]{6,20}$/).withMessage("Debes incluir números, mayúscula, minúscula y  un caracter especial($!%*?&.,;')").bail(),
  body('checkbox')
    .custom(value => {
      return value === 'on';
    })
    .withMessage('Debe aceptar los términos y condiciones'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        delete req.body.password;
      }
      next();
    }
];