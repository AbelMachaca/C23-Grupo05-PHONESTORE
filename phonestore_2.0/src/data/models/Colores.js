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
        tableName:"Colores",
        timeStamps:false
    };

    const Colores=sequelize.define(alias,cols,config);
    return Colores;
}