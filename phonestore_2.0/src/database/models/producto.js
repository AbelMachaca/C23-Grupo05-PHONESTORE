module.exports = (sequelize, DataTypes) => {
    const alias = "Productos";
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        marca: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            unsigned: true
        },
        almacenamiento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ram: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        so: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    };
    const config = {
        tableName: 'productos',
        timestamps: false,
    };

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}
