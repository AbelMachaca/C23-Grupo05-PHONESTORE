module.exports=(Sequelize,dataTypes)=>{
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
        tableName:"Tabla_colores_productos_imagen",
        timeStamps:false
    }

    const Tabla_colores_productos_imagen=sequelize.define(alias,cols,config);
    return Tabla_colores_productos_imagen
    
}