'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagenes_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Producto, {
        as: "productos",
        foreignKey: "id_producto_imagen"
      }),
      this.hasMany(models.tabla_colores_productos_imagenes, {
        as: "tablas_colores_productos_imagenes",
        foreignKey: "id_imagenes"
      })
    }
  }
  imagenes_productos.init({
    url_de_imagen: DataTypes.STRING,
    id_producto_imagen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagenes_producto',
    timestamps: false
  });
  return imagenes_productos;
};