module.exports=(sequelize,dataTypes)=>{
  const alias="Entidad_de_usuario";
  const cols={
    idEntidad_de_Usuario:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        insigned:true
    }
  };
  const config={
    tableName:"entidad_de_usuario",
    timestamps:false
  };
  const Entidad_de_usuario=sequelize.define(alias,cols,config);
      Entidad_de_usuario.associate=function(models){
        Entidad_de_usuario.hasMany(models.Usuario,{
            as:"entidadUsuario",
            foreingKey:id_entidad_usuario
        })
      }
  return Entidad_de_usuario;
}