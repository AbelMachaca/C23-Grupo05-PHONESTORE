'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Comentarios_productos', {
      id_comentario:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true
    },
          id_Usuario_comentario:{
          type:dataTypes.INTEGER,
          allowNull:false,
          unsigned:true,   
          references: {
            model:{tableName:'Usuario'}, 
            key: 'id_Usuario'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
          id_Producto_comentario:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true,
            references: {
            model:{tableName:'Productos'}, 
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        comentario:{
          type:dataTypes.STRING(200),
          allowNull:false
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
    await queryInterface.dropTable('Comentarios_productos');
    
  }
};
