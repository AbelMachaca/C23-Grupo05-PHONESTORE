'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      id_historial_compras: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      direccion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      telefono: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
      imagen_usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_entidad_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
          references: {
            model: {
              tableName: 'entidad_de_usuarios'
            },
            key: 'id'
          },
        
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};