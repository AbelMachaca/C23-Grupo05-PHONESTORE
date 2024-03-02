module.exports=(sequelize,dataTypes)=>{
    const alias = "Usuario";
    const cols={
        id_Usuario:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
        },
        id_historial_compras:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        direccion:{
            type:dataTypes.TEXT,
            allowNull:false    
        },
        telefono:{
            type:dataTypes.INTEGER,
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        imagen_usuario:{
            type:dataTypes.STRING(200),
            allowNull:false
        },
        id_entidad_usuario:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        }
};
    const config={
         tableName:"usuario",
         timeStamps:false
    };
    
    const Usuario=sequelize.define(alias,cols,config);

    Usuario.associate=function(models){
        Usuario.belongsTo(models.Entidad_de_usuario,{
            as:"entidadUsuario",
            foreingKey:id_entidad_usuario
        }),
        Usuario.hasMany(models.Comentarios_productos,{
            as:"comentarioUsuario",
            foreingKey:id_Usuario_comentario
        }),
        Usuario.hasMany(models.Ventas,{
            as:"ventasUsuario",
            foreingKey:id_Usuario_venta
        })
    }
    return Usuario;
}