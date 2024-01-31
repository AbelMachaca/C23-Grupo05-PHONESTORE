const { body } = require('express-validator');
const fs = require('fs');


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
  body('lastName')
    .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isLength({ min: 3, max: 30 }).withMessage('El valor ingresado debe tener al menos 3 caracteres y máximo 30').bail(),
  body('email')
    .notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isEmail().withMessage('Debe ser un correo con formato válido').bail()
    .custom(value => {
      const user = users.find(elemento => elemento.email === value);
      return user ? false : true;
    }).withMessage('El usuario ya existe, utilice otro correo electrónico'),
  body('password')
    .notEmpty().withMessage('El campo no puede estar vacío').bail(),
    body('checkbox')
    .custom(value => {
      return value === 'on';
    })
    .withMessage('Debe aceptar los términos y condiciones'),
];
