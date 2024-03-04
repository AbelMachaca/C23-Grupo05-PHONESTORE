const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require("path")
const db = require('../database/models')


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
                  if (req.body.remember == "true") {
                      const cookieUser = {
                          id: user.dataValues.id,
                          nombre: user.dataValues.nombre,
                          email: user.dataValues.email,
                          id_entidad_usuario: user.dataValues.id_entidad_usuario,
                          image: user.dataValues.image,
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
      const { id } = req.params;
      const users = getJson();
      const user = users.find((element) => element.id == id);
      res.render("users/profile", { user })
  },

  edit:(req,res)=>{
      const { id } = req.params;
      const users = getJson();
      const user = users.find((element) => element.id == id);
      res.render("users/userUpdate", { user })
  },
  update:(req, res)=>{
      const errores = validationResult(req);
      //console.log("errores:", errores);
      if(!errores.isEmpty()){
      const { id } = req.params;
      const users = getJson();
      const user = users.find((element) => element.id == id);
      return res.render('users/userUpdate',{errores:errores.mapped(),old:req.body, user})
      }


      const usersFilePath = path.join(__dirname, '../data/users.json');
      const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
          const {id} = req.params
          const {nombre, apellido, email, password, address, tel, postalCode, birthDate,dniNumber} = req.body;
          const nuevoArray = users.map(user => {
              if (user.id == id){
                  return{
                      id,
                      nombre: nombre.trim(),
                      apellido: apellido.trim(),
                      dniNumber,
                      // email: email.trim(),
                      password,
                      address: address.trim(),
                      tel,
                      postalCode,
                      birthDate: birthDate,
                      imagen_usuario: req.file ? req.file.filename : user.imagen_usuario,
                  }
              }
          })
          const json = JSON.stringify(nuevoArray);
          fs.writeFileSync(usersFilePath, json, "utf-8"); 
          
      
  }
  };

module.exports = userController;