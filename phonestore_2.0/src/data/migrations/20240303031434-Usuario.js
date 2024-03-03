'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Usuario', {
      id_Usuario:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true,
        autoIncrement:true
      },
      id_historial_compras:{
      type:dataTypes.INTEGER,
      allowNull:false,
      },
      nombre:{
       type:dataTypes.STRING(45),
       allowNull:false
      },
      apellido:{
        type:dataTypes.STRING(45),
        allowNull:false
      },
      direccion:{
        type:dataTypes.TEXT,
        allowNull:false    
      },
      telefono:{
        type:dataTypes.INTEGER,
        allowNull:false
      },
      email:{
        type:dataTypes.STRING(45),
        allowNull:false,
      },
      imagen_usuario:{
        type:dataTypes.STRING(200),
        allowNull:false
    },
       
    id_entidad_usuario:{
      type:dataTypes.INTEGER,
      allowNull:false,
      unsigned:true,   
          references: {
            model:{tableName:'entidad_de_usuario'}, 
            key: 'idEntidad_de_Usuario'
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
    await queryInterface.dropTable('Usuario');
    
  }
};