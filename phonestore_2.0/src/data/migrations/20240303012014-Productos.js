'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      marca: {
        type: dataTypes.STRING,
        allowNull: false
      },
      modelo: {
        type: dataTypes.STRING,
        allowNull: false
      },
      precio: {
        type: dataTypes.DECIMAL,
        allowNull: false
      },
      almacenamiento: {
        type: dataTypes.INTEGER
      },
      ram: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      so: {
        type: dataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: dataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: dataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: dataTypes.DATE
      }
    });
  },
  async down(queryInterface, dataTypes) {
    await queryInterface.dropTable('productos');
  }
};
  

 

