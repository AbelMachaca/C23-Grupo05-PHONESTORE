'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Entidad_de_usuario', {
      idEntidad_de_Usuario:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        insigned:true
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Entidad_de_usuario');
    
  }
};
