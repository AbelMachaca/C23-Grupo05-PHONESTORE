const { body, validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = [
    body('modelo').notEmpty().withMessage('El nombre del modelo debe tener al menos 5 caracteres.'),
    //body('image').notEmpty().withMessage('Debe seleccionar al menos una imagen'),
    body('marca').notEmpty().withMessage("Debe seleccionar una marca"),
    body('precio').notEmpty().withMessage("El campo no puede estar vacío").isNumeric().withMessage('El precio debe ser un número'),
    body('descripcion').notEmpty().withMessage("El campo no puede estar vacío").isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('almacenamiento').notEmpty().withMessage("El campo no puede estar vacío").isNumeric().withMessage('El almacenamiento debe ser un número'),
    body('ram').notEmpty().withMessage("El campo no puede estar vacío").isNumeric().withMessage('La RAM debe ser un número'),
    body('so').notEmpty().withMessage("El campo no puede estar vacío"),
]