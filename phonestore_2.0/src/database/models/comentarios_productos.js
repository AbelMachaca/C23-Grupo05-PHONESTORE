'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentarios_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        as: "usuarios",
        foreignKey: "id_Usuario_comentario"
      }),
      this.belongsTo(models.Producto, {
        as: "productos",
        foreignKey: "id_Producto_comntario"
      })
    }
  }
  comentarios_productos.init({
    id_Usuario_comentario: DataTypes.INTEGER,
    id_Producto_comntario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comentarios_productos',
    timestamps: false
  });
  return comentarios_productos;
};