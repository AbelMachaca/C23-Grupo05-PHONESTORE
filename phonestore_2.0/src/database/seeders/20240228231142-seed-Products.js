'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtiene la ruta absoluta del archivo JSON
    const productosDataPath = path.join(__dirname, '../../data/products.json');

    // Lee el archivo JSON
    const productosData = fs.readFileSync(productosDataPath, 'utf8');

    // Parsea los datos JSON
    const productos = JSON.parse(productosData);

    // Agrega las columnas createdAt y updatedAt a cada objeto
    const productosConFechas = productos.map(producto => ({
      ...producto,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    // Inserta los datos en la tabla de productos
    await queryInterface.bulkInsert('Productos', productosConFechas, {});
  },

  async down(queryInterface, Sequelize) {
    // Elimina todos los datos de la tabla de productos
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
