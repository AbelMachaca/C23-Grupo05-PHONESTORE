'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        as: "usuarios",
        foreignKey: "id_Usuario_venta"
      }),
      this.belongsTo(models.Producto, {
        as: "productos",
        foreignKey: "id_producto_venta"
      })
    }
  }
  ventas.init({
    id_Usuario_venta: DataTypes.INTEGER,
    id_producto_venta: DataTypes.INTEGER,
    fecha_de_venta: DataTypes.DATE,
    medio_de_pago: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ventas',
    timestamps: false
  });
  return ventas;
};