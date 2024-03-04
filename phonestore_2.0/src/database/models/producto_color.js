'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto_color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producto_color.init({
    id_producto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto_color',
  });
  return producto_color;
};