module.exports=(sequelize,dataTypes)=>{

    const alias ="Productos";
    const cols={
        id_Producto:{ 
          type: dataTypes.INTEGER,
          primaryKey:true,
          allowNull:false,
          unsigned:true
        },

        marca:{
          type:dataTypes.STRING(45),
          allowNull:false,
        },

        modelo:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        
        precio:{
            type:dataTypes.DECIMAL(10,2),
            allowNull:false,
            unsigned:true
        },
        almacenamiento:{
             type:dataTypes.INTEGER,
             allowNull:false,
        },
        ram:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },
        so:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(500),
            allowNull:false
        }

    };

    const config = {
        tableName:"productos",
        timeStamps:false
    };

    const Productos=sequelize.define(alias,cols,config);

    Productos.associate= function(models){
        Productos.hasMany(models.Imagenes_producto,{
          as:"imagenesProductos",
          foreingKey:id_producto_imagen
        }),
        Productos.hasMany(models.Colores,{
            as:"coloresProductos",
            foreingKey:id_producto_color
          }),
          Productos.hasMany(models.Tabla_colores_productos_imagen,{
            as:"tablaColoresProductosImagen",
            foreingKey:id_producto
          }),
          Productos.hasMany(models.Ventas,{
            as:"ventasProductos",
            foreingKey:id_producto_venta
          }),
          Productos.hasMany(models.Comentarios_productos,{
            as:"comentarioProducto",
            foreingKey:id_Producto_comentario
          })
        }
    return Productos
}