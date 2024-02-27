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
        }
    };
    const config={
        tableName:"Comentarios_productos",
        timeStamps:false
    };

    const Comentarios_productos=sequelize.define(alias,cols,config);
    return Comentarios_productos;
}