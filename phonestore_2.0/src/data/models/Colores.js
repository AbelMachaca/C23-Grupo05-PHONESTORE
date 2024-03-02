module.exports=(Sequelize,dataTypes)=>{
    const alias= "Colores";
    const cols={
        id_colores:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true
        },
        id_producto_color:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        }
    };
    const config={
        tableName:"colores",
        timeStamps:false
    };

    const Colores=sequelize.define(alias,cols,config);

    Colores.associate= function(models){
        Colores.belongsTo(models.Productos,{
          as:"coloresProductos",
          foreingKey:id_producto_color
        }),
        Colores.hasMany(models.Tabla_colores_productos_imagen,{
            as:"tablaColores",
            foreingKey:id_colores 
        })
        }

    return Colores;
}