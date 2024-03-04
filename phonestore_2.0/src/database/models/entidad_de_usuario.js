'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entidad_de_Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Usuario, {
        as: "usuarios",
        foreignKey: "id_entidad_usuario"
      })
    }
  }
  Entidad_de_Usuario.init({
    idEntidad_de_Usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entidad_de_Usuario',
    timestamps: false
  });
  return Entidad_de_Usuario;
};