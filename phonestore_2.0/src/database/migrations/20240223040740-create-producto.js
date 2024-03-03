'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precio: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      almacenamiento: {
        type: Sequelize.INTEGER
      },
      ram: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      so: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};