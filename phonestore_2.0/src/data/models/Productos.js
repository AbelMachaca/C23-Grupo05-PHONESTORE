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
        tableName:"Productos",
        timeStamps:false
    };

    const Productos=sequelize.define(alias,cols,config);
    return Productos
       
    
}