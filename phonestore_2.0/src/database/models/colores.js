'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Producto, {
        as: "productos",
        foreignKey: "id_producto_color"
      }),
      this.hasMany(models.tabla_colores_productos_imagenes, {
        as: "tablas_colores_productos_imagenes",
        foreignKey: "id_colores"
      })
    }
  }
  colores.init({
    id_producto_color: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'colores',
    timestamps: false
  });
  return colores;
};