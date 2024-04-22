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
      this.belongsTo(models.Entidad_de_Usuario, {
        as: "entidades_usuarios",
        foreignKey: "id_entidad_usuario"
      }),
      this.hasMany(models.comentarios_productos, {
        as: "comentarios_productoss",
        foreignKey: "id_Usuario_comentario"
      }),
      this.hasMany(models.ventas, {
        as: "ventas",
        foreignKey: "id_Usuario_venta"
      })
    }
  }
  Usuario.init({
    id_historial_compras: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.TEXT,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagen_usuario: DataTypes.STRING,
    id_entidad_usuario: DataTypes.INTEGER,
    googleId: DataTypes.STRING // Agregar el campo googleId aquí
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
  });
  return Usuario;
};