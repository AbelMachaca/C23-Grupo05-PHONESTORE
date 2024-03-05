'use strict'
module.exports=(sequelize,dataTypes)=>{
    const alias="Imagenes_producto";
    const cols={
        id_imagen:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
            },
    
        url_de_imagen:{
             type:dataTypes.STRING(45),
             allowNull:false,
        },
        id_producto_imagen:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        }
    };
    const config={
        tableName:"imagenes_producto",
        timeStamps:false
    };

    const Imagenes_producto=sequelize.define(alias,cols,config);
    
          Imagenes_producto.associate= function(models){
          Imagenes_producto.belongsTo(models.Productos,{
            as:"imagenesProductos",
            foreingKey:id_producto_imagen
          }),
          Imagenes_producto.hasMany(models.Tabla_colores_productos_imagen,{
            as:"tablaColoresImagen",
            foreingKey:id_imagenes  
          })  
          }

    return Imagenes_producto;

}