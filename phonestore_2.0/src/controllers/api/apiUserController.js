const DB = require('../../database/models')
const Op = DB.Sequelize.Op

const userController = {
    list: (req, res) => {
        console.log("entre");
        DB.Usuario.findAll()
        .then(usuarios => {
            const usuarios1 = usuarios.map(usuario => ({
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                url: 'http://localhost:3030/users/profile/${}'+usuario.id
            }));
    
            return res.status(200).json({
                count: usuarios1.length,
                data: usuarios1
            });
        })
        .catch(error => {
            console.error("Error al buscar usuarios:", error);
            return res.status(500).json({
                meta: {
                    status: 500,
                    message: "Error interno del servidor"
                }
            });
        });
    },
    show: (req, res) => {
        console.log("entre");
        DB.Usuario.findByPk(req.params.id, {
            attributes: ['id', 'nombre', 'apellido', 'email', 'direccion', 'telefono']
        })
        .then(usuario => {            
            const usuarioMod = {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                direccion: usuario.direccion,
                telefono: usuario.telefono,
                url: `http://localhost:3030/users/photo/${usuario.id}`
            };
            return res.status(200).json({
                data: usuarioMod
            });
        })
        .catch(error => {
            console.error("Error al buscar usuario:", error);
            return res.status(500).json({
                meta: {
                    status: 500,
                    message: "Error interno del servidor"
                }
            });
        });
    }

}

module.exports = userController