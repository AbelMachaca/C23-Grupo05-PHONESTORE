'use strict'
module.exports=(sequelize,dataTypes)=>{
    const alias="Tabla_colores_productos_imagen";
    const cols={
        id_colores_productos_imagenes:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true
        },
        id_producto:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        id_colores:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        id_imagenes:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        }
    };
    const config={
        tableName:"tabla_colores_productos_imagen",
        timeStamps:false
    }

    const Tabla_colores_productos_imagen=sequelize.define(alias,cols,config);

    Tabla_colores_productos_imagen.associate= function(models){
        Tabla_colores_productos_imagen.belongsTo(models.Productos,{
          as:"tablaColoresProductosImagen",
          foreingKey:id_producto
        }),
        Tabla_colores_productos_imagen.belongsTo(models.Imagenes_producto,{
            as:"tablaColoresImagen",
            foreingKey:id_imagenes  
        }),
        Tabla_colores_productos_imagen.belongsTo(models.Colores,{
            as:"tablaColores",
            foreingKey:id_colores  
        })
    return Tabla_colores_productos_imagen
    
}
}