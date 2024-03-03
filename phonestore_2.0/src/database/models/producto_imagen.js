'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto_imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producto_imagen.init({
    ulr: DataTypes.STRING,
    id_producto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto_imagen',
  });
  return producto_imagen;
};