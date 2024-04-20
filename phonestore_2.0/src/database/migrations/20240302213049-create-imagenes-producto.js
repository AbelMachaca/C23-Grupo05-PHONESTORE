'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagenes_productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      url_de_imagen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_producto_imagen: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'productos'
          },
          key: 'id'
        },
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagenes_productos');
  }
};