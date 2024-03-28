const { body } = require('express-validator');
const fs = require('fs');
const db = require("../database/models")


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
    .notEmpty().withMessage('El campo no puede estar vacío').bail(),
    body('checkbox')
    .custom(value => {
      return value === 'on';
    })
    .withMessage('Debe aceptar los términos y condiciones'),
];