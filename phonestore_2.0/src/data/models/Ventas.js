module.exports=(sequelize,dataTypes)=>{
    const alias="Ventas";
    const cols={
        id_ventas:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
        },
        id_Usuario_venta:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unique:true,
            unsigned:true
        },
        id_producto_venta:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        fecha_de_venta:{
            type:dataTypes.DATE,
            allowNull:false
        },
        medio_de_pago:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        cantidad:{
            type:dataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        precio_unitario:{
            type:dataTypes.DECIMAL(10,2),
            allowNull:false
        },
        total:{
            type:dataTypes.DECIMAL(10,2),
            allowNull:false
        },
        ventasCol:{
            type:dataTypes.STRING(45),
            allowNull:false
        }
    };
    const config={
        tableName:"ventas",
        timeStamps:false
    };

    const Ventas=sequelize.define(alias,cols,config);
    Ventas.associate= function(models){
        Ventas.belongsTo(models.Productos,{
          as:"ventasProductos",
          foreingKey:id_producto_venta
        })  
        }
    return Ventas;
}