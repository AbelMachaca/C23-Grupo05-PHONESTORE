'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entidad_de_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  entidad_de_usuario.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'entidad_de_usuario',
  });
  return entidad_de_usuario;
};