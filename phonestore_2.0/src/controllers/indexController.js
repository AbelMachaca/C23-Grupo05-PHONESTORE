const path = require('path');
const db = require('../database/models')
const { Op } = require("sequelize");


const indexController = {
    
    index: async (req, res) => {
        try {
            const products = await db.Producto.findAll({
                include: [{ 
                    association: "imagenes_productos"}],
                limit: 6 
            });;
            res.render("index", { title: "products", products, usuario: req.session.user });
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
        search: async (req, res) => {
            try {
              const query = req.query.q;
              const products = await db.Producto.findAll({
                where: {
                  [Op.or]: [
                    { modelo: { [Op.like]: `%${query}%` } },
                    { marca: { [Op.like]: `%${query}%` } }
                  ]
                },
                include: [{
                  association: "imagenes_productos"
                }],
                distinct: true // Evitar productos duplicados
              });
              console.log(products)
        
              if (products.length === 0) {
                // No se encontraron productos
                res.render("products/noResults", { query, usuario: req.session.user });
              } else {
                // Se encontraron productos
                res.render("products/listProducts", { products, query, usuario: req.session.user });
              }
            } catch (error) {
              console.error("Error al realizar la búsqueda:", error);
              res.status(500).send("Error interno del servidor al realizar la búsqueda");
            }
          }

      }
module.exports = indexController;