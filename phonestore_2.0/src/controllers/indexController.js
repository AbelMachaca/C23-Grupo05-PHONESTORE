const path = require('path');
const db = require('../database/models')


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
    }
    
}
module.exports = indexController;