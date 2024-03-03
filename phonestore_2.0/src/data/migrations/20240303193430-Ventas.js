'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, dataTypes) {
    await queryInterface.createTable('Ventas', {
      id_ventas:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unsigned:true,
        autoIncrement:true
    },
      id_Usuario_venta:{
        type:dataTypes.INTEGER,
        allowNull:false,
        unique:true,
        unsigned:true,   
          references: {
            model:{tableName:'usuario'}, 
            key: 'id_Usuario'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        id_producto_venta:{
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
        fecha_de_venta:{
          type:dataTypes.DATE,
          allowNull:false
        },
        medio_de_pago:{
          type:dataTypes.STRING(45),
          allowNull:false,
        },
        cantidad:{
          type:dataTypes.INTEGER,
          allowNull:false,
          unsigned:true
        },
        precio_unitario:{
          type:dataTypes.DECIMAL(10,2),
          allowNull:false
        },
        total:{
          type:dataTypes.DECIMAL(10,2),
          allowNull:false
        },
        ventasCol:{
          type:dataTypes.STRING(45),
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
    await queryInterface.dropTable('Ventas');
    
  }
}