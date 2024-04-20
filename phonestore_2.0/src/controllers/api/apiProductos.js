const DB = require('../../database/models');
const Op = DB.Sequelize.Op;

const productsController = {
    list: (req, res) => {
        console.log("entre");
        DB.Producto.findAll({
            include: [{ association: "imagenes_productos" }, { association: "colores" }]
        })
        .then(productos => {

            const countMarca = {};
            productos.forEach(producto => {
                countMarca[producto.marca] = (countMarca[producto.marca] || 0) + 1;
            });

            const listadoDeProductos = productos.map(producto => ({
              id:producto.id,
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
                countMarca: countMarca, // Agregar el conteo por marca al objeto de respuesta
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
      },

      listarPormarca: async (req, res) => {
        try {
          // Obtener los datos de productos del API
          const response = await fetch('http://localhost:3030/api/products');
          const data = await response.json();
      
          // Verificar si existe la clave 'data' en la respuesta
          if (data && data.data && Array.isArray(data.data)) {
            const products = data.data;
      
            // Crear un objeto para almacenar los productos agrupados por marca
            const productsByBrand = {};
      
            // Iterar sobre los datos de productos y agruparlos por marca
            products.forEach(product => {
              if (!productsByBrand[product.marca]) {
                productsByBrand[product.marca] = [];
              }
              productsByBrand[product.marca].push(product);
            });
      
            // Renderizar la vista con los productos agrupados por marca
            res.render('products/productosPorCategoria', { productsByBrand });
          } else {
            // Si la estructura de datos es incorrecta, enviar un mensaje de error
            console.error('La estructura de datos recibida del API es incorrecta');
            res.status(500).send('Error al procesar los datos del API');
          }
        } catch (error) {
          console.error('Error al obtener los productos del API:', error);
          // Manejar el error y enviar una respuesta apropiada al cliente
          res.status(500).send('Error al obtener los productos del API');
        }
      }
      
};

module.exports = productsController;
