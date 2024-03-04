'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Imagenes_producto', {
      id_imagen:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true,
        autoIncrement:true
        },
        url_de_imagen:{
          type:dataTypes.STRING(45),
          allowNull:false,
     },
          id_producto_imagen:{
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
    await queryInterface.dropTable('Imagenes_producto');
    
  }
  }

