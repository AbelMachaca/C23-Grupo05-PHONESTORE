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
        tableName:"Imagenes_producto",
        timeStamps:false
    };

    const Imagenes_producto=sequelize.define(alis,cols,config);
    return Imagenes_producto;

}