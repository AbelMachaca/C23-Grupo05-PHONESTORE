const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../database/models")


module.exports = [
    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .isEmail().withMessage("Ingrese un email válido").bail()
        .custom(value => {
            return db.Usuario.findOne({
                where: { email: value }
            }).then(user => {
                if (!user) {
                    return Promise.reject('Email incorrecto')
                }
            }).catch(() => {
                return Promise.reject('Email incorrecto')
            })
        }),

    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .custom((value, { req }) => {
            return db.Usuario.findOne({
                where: { email: req.body.email }
            }).then(user => {
                if (!bcrypt.compareSync(value, user.dataValues.password)) {
                    return Promise.reject('Contraseña incorrecta')
                }
            }).catch(() => {
                return Promise.reject('Contraseña incorrecta')
            })
        })
];