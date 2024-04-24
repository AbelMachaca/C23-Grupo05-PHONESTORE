const DB = require('../../database/models')
const Op = DB.Sequelize.Op
const { validationResult } = require('express-validator');

const userController = {
    list: (req, res) => {
        console.log("entre");
        DB.Usuario.findAll()
        .then(usuarios => {
            const usuarios1 = usuarios.map(usuario => ({
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.id_entidad_usuario,
                url: 'http://localhost:3030/users/profile/'+usuario.id
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
        DB.Usuario.findByPk(req.params.id, {
          attributes: ['id', 'nombre', 'apellido', 'email', 'direccion', 'telefono', 'imagen_usuario']
        })
        .then(usuario => {            
          const imageUrl = `${req.protocol}://${req.get('host')}/images/users/${usuario.imagen_usuario}`;
          const usuarioMod = {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            direccion: usuario.direccion,
            telefono: usuario.telefono,
            imagen_usuario: imageUrl // Incluir la URL de la imagen en el objeto de usuario
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
      },
      update: (req, res) => {
        const errores = validationResult(req);
        const id = req.params.id;
    
        if (errores.isEmpty()) {
          DB.Usuario.findByPk(id)
            .then(usuario => {
              if (!usuario) {
                return res.status(404).json({
                  meta: {
                    status: 404,
                    message: 'Usuario no encontrado'
                  }
                });
              }
    
              // Actualizar los datos del usuario
              usuario.nombre = req.body.nombre;
              usuario.apellido = req.body.apellido;
              usuario.direccion = req.body.direccion;
              usuario.telefono = req.body.telefono;
              usuario.email = req.body.email;
            usuario.id_entidad_usuario = req.body.id_entidad_usuario
              // Guardar los cambios en la base de datos
              usuario.save()
                .then(() => {
                  return res.status(200).json({
                    meta: {
                      status: 200,
                      message: 'Usuario actualizado correctamente'
                    }
                  });
                })
                .catch(error => {
                  console.error('Error al guardar los cambios del usuario:', error);
                  return res.status(500).json({
                    meta: {
                      status: 500,
                      message: 'Error interno del servidor'
                    }
                  });
                });
            })
            .catch(error => {
              console.error('Error al buscar usuario:', error);
              return res.status(500).json({
                meta: {
                  status: 500,
                  message: 'Error interno del servidor'
                }
              });
            });
        } else {
          // Si hay errores de validación, devolverlos como respuesta
          return res.status(400).json({
            meta: {
              status: 400,
              message: 'Errores de validación',
              errors: errores.array()
            }
          });
        }
      }
    };



module.exports = userController