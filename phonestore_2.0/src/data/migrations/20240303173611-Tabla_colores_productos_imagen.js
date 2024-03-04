'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Tabla_colores_productos_imagen', {
      id_colores_productos_imagenes:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true
    },
    id_producto:{
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
        id_colores:{
          type:dataTypes.INTEGER,
          allowNull:false,
          unsigned:true,
            references: {
            model:{tableName:'colores'}, 
            key: 'id_colores'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        id_imagenes:{
          type:dataTypes.INTEGER,
          allowNull:false,
          unsigned:true,
            references: {
            model:{tableName:'imagenes_producto'}, 
            key: 'id_imagen'
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
    await queryInterface.dropTable('Tabla_colores_productos_imagen');
    
  }
};
