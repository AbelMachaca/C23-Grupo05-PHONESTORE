module.exports = (sequelize, DataTypes) => {

    const alias = "Usuario";
    const cols = {
        id_usuario: {
            primaryKey: true,
            type:DataTypes.INTEGER,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        direccion:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        telefono:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(45),
            allowNull: false
        },
        imagen_usuario:{
            type:DataTypes.STRING(45)
        },
        
    };
    const config = {
        tableName: 'Usuario', 
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at'
    };

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario

}