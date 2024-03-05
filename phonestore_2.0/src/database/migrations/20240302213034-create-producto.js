'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      precio: {
        type: Sequelize.DECIMAL.UNSIGNED,
        allowNull: false,
      },
      almacenamiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ram: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      so: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};