const DB = require('../../database/models')
const Op = DB.Sequelize.Op

const productsController = {
    list: (req, res) => {
        console.log("entre");
        DB.Producto.findAll({
            include: [{ association: "imagenes_productos" },{ association: "colores" }]
        })
        .then(productos => {
            const listadoDeProductos = productos.map(producto => ({
                marca: producto.marca,
                modelo: producto.modelo,
                precio: producto.precio,
                almacenamiento: producto.almacenamiento,
                ram: producto.ram,
                so: producto.so,
                descripcion: producto.descripcion,
                imagenes: producto.imagenes_productos.map(imagen => ({
                    url: imagen.url_de_imagen
                })),
                color: producto.colores.map(color => ({
                    color: color.id_producto_color
                }))
            }));
    
            return res.status(200).json({
                count: listadoDeProductos.length,
                data: listadoDeProductos
            });
        })
        .catch(error => {
            console.error("Error al buscar productos:", error);
            return res.status(500).json({
                meta: {
                    status: 500,
                    message: "Error interno del servidor"
                }
            });
        });
    },
    
    
    show: (req, res) => {
        DB.imagenes_producto.findByPk(req.params.id)
          .then(imagen => {
            if (!imagen) {
              return res.status(404).json({
                meta: {
                  status: 404,
                  message: "Imagen no encontrada"
                }
              });
            }
            
            return res.status(200).json({
              url: `http://localhost:3030/images${imagen.url_de_imagen}`
            });
          })
          .catch(error => {
            console.error("Error al buscar la imagen:", error);
            return res.status(500).json({
              meta: {
                status: 500,
                message: "Error interno del servidor"
              }
            });
          });
      }

}

module.exports = productsController 