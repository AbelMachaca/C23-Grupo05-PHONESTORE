'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagen_de_usuario: DataTypes.STRING,
    id_entidad_de_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};