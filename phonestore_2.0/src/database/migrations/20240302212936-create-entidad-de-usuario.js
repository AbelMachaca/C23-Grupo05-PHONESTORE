'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entidad_de_Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false,
      } 
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entidad_de_Usuarios');
  }
};