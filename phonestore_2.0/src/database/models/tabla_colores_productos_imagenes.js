'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabla_colores_productos_imagenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Producto, {
        as: "productos",
        foreignKey: "id_producto"
      }),
      this.belongsTo(models.colores, {
        as: "colores",
        foreignKey: "id_colores"
      }),
      this.belongsTo(models.imagenes_producto, {
        as: "imagenes_productos",
        foreignKey: "id_imagenes"
      })
    }
  }
  tabla_colores_productos_imagenes.init({
    id_producto: DataTypes.INTEGER,
    id_colores: DataTypes.INTEGER,
    id_imagenes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tabla_colores_productos_imagenes',
    timestamps: false
  });
  return tabla_colores_productos_imagenes;
};