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
      // define association here
    }
  }
  ventas.init({
    fecha_de_venta: DataTypes.DATE,
    medio_de_pago: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    id_usuario:DataTypes.INTEGER,
    id_producto:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'ventas',
  });
  return ventas;
};