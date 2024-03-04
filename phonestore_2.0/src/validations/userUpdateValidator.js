const fs = require("fs");
const {body} = require('express-validator');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = [
    body('nombre').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:3,max:30}).withMessage("El valor ingresado debe tener al menos 3 caracteres y maximo 30").bail(),
    
    body('apellido').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:3,max:30}).withMessage("El valor ingresado debe tener al menos 3 caracteres y maximo 30").bail(),
    
    body('direccion').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:3,max:100}).withMessage("El valor ingresado debe tener al menos 3 caracteres y maximo 100").bail(),
    
    body('telefono').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isInt().withMessage("Debe ingresar caracteres númericos ")
    .isLength({min:7,max:10}).withMessage("El valor ingresado debe tener al menos 7 caracteres y maximo 10").bail(),

    // body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
    // .custom((value)=> {
    //     return value == req.body.password2;
    // }).withMessage("Los password no coinciden"),

    // body('dniNumber').notEmpty().withMessage("El campo no puede estar vacio").bail()
    // .isLength({min:7,max:8}).withMessage("El valor ingresado debe tener al menos 7 caracteres y maximo 8").bail()
    // .custom(value => {
    //     // console.log("value:",value);        
    //     const user = users.find(elemento => elemento.dniNumber == value);
    //     return user ? false : true
    // }).withMessage("El DNI ya se ecuentra registrado"),



];





