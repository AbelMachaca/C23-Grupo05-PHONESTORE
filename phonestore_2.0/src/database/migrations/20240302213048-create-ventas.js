'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ventas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      id_Usuario_venta: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        allowNull: false,
          references: {
            model: {
              tableName: 'usuarios'
            },
            key: 'id'
          },
      },
      id_producto_venta: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'productos'
          },
          key: 'id'
        },
      },
      fecha_de_venta: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      medio_de_pago: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      precio_unitario: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ventas');
  }
};