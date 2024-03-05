'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
     await queryInterface.createTable('Colores', {
      id_colores:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true
    },
    id_producto_color:{
      type:dataTypes.INTEGER,
      allowNull:false,
      unsigned:true, 
          references: {
            model:{tableName:'productos'}, 
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Colores');
     
  }
};
