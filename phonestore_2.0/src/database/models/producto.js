'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ventas, {
        as: "ventas",
        foreignKey: "id_producto_venta"
      }),
      this.hasMany(models.colores, {
        as: "colores",
        foreignKey: "id_producto_color"
      }),
      this.hasMany(models.imagenes_producto, {
        as: "imagenes_productos",
        foreignKey: "id_producto_imagen"
      }),
      this.hasMany(models.tabla_colores_productos_imagenes, {
        as: "tablas_colores_productos_imagenes",
        foreignKey: "id_producto"
      }),
      this.hasMany(models.comentarios_productos, {
        as: "comentarios_productoss",
        foreignKey: "id_Producto_comntario"
      })
    }
  }
  Producto.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    almacenamiento: DataTypes.INTEGER,
    ram: DataTypes.INTEGER,
    so: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
  });
  return Producto;
};