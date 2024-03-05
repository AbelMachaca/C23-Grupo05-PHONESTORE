const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");
const usuario = require("../database/models/usuario");

const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
    const json = JSON.parse(file);
    return json;
  };
  
  
  const userController = {
    
    login: function (req, res) {
      res.render("./users/login", {title: "Login",usuario: req.session.user,        
        });
    },
    processlogin: (req, res) => {
      


      const errores = validationResult(req);
      if (!errores.isEmpty()) {
          console.log("errores:", errores.mapped());
          res.render("./users/login", {
            errores: errores.mapped(),
            title: "Login",
            usuario: req.session.user,
          });
      } else {
          const { email } = req.body;
          db.Usuario.findOne({
              attributes: { exclude: ["password"] },
              where: {email,},
          })
              .then((user) => {
                  console.log("user info:", user);
                  req.session.user = user.dataValues;
                  console.log("valores", user.dataValues)
                  console.log("session2", req.session.id_entidad_usuario)
                  if (req.body.remember == "true") {
                      const cookieUser = {
                          id: user.dataValues.id,
                          nombre: user.dataValues.nombre,
                          email: user.dataValues.email,
                          id_entidad_usuario: user.dataValues.id_entidad_usuario,
                          image: user.dataValues.image,
                          rol: user.dataValues.id_entidad_usuario
                      };
                      
                      res.cookie("user", cookieUser, { maxAge: 1000 * 60 * 15 });
                      res.cookie("remember", "true", { maxAge: 1000 * 60 * 15 });
                  }
                  res.redirect("/");
              })
              .catch((err) => {
                  console.log(err);
              });
      }
    },
    logout:(req,res)=>{
      req.session.destroy();
      if (req.cookies.user) {
        res.clearCookie('user');
        res.clearCookie('remember');
      }
      res.redirect('/');
       },
    formRegister: (req, res) => {
      res.render('users/register', { title: 'Registro' });
    },
    register: (req, res) => {
      const errores = validationResult(req);
      if (!errores.isEmpty()) {
        return res.render('users/register', {
          errores: errores.mapped(),
          old: req.body,
          title: 'Registro'
        });
      }
  
      const file = req.file;
  
      const { name, apellido, email, password } = req.body;
  
      const newUser = {
        nombre: name.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(password, 10),
        id_entidad_usuario: 2,
        imagen_usuario: file ? file.filename : 'predeterminado.webp'
      };
  
      db.Usuario.create(newUser)
      .then(() => {
        res.redirect("/users/login");
    })
    .catch(err =>{
      console.log(err)
    })
  
     
    }, 
    show:(req,res)=>{
      db.Usuario.findByPk(req.params.id).then(function (usuario) {
        res.render("users/profile", { usuario: usuario });
      });
  },

  edit: (req, res) => {
    db.Usuario.findByPk(req.params.id).then(function (usuario) {
      console.log(usuario);
      res.render("users/userUpdate", { usuario: usuario });
    });
  },
  update: (req,res) => {
    const errores = validationResult(req);
    const id = req.params.id
    if (errores.isEmpty()){
      db.Usuario.findByPk(id).then(usuario => {
        console.log("ACTUALIZA LOS DATOS")
        console.log(req.body)
        db.Usuario.update(
        {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        imagen_usuario: req.file ? req.file.filename : usuario.imagen_usuario,
        },
        {where: { id: id}}
        ).then(() => {
          console.log("usuario editado")
          res.redirect(`/users/profile/${id}`);
      })
      })
    } else {
      db.Usuario.findByPk(id)
      .then((usuario) => {
        if (!errores.isEmpty()) {
          console.log("se ejecuta el retorno con errores")
          return res.render("users/userUpdate", {errores: errores.mapped(),old: req.body,usuario});
        }
      })
    }
  }
  
}

module.exports = userController;
