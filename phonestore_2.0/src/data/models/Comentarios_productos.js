module.exports=(sequelize,dataTypes)=>{
    const alias="Comentarios_productos";
    const cols={
        id_comentario:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true
        },
        id_Usuario_comentario:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        id_Producto_comentario:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        comentario:{
            type:dataTypes.STRING(200),
            allowNull:false
        }
    };
    const config={
        tableName:"comentarios_productos",
        timeStamps:false
    };

    const Comentarios_productos=sequelize.define(alias,cols,config);

    Comentarios_productos.associate= function(models){
        Comentarios_productos.belongsTo(models.Productos,{
          as:"comentarioProducto",
          foreingKey:id_Producto_comentario
        }),
        Comentarios_productos.belongsTo(models.Usuario,{
            as:"comentarioUsuario",
            foreingKey:id_Usuario_comentario
          })
        }
    return Comentarios_productos;
}