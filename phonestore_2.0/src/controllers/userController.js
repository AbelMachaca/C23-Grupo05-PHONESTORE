const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require("path")
const { v4: uuidv4 } = require("uuid");
const db =require("../database/models");
const usuario = require('../database/models/usuario');

const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
    const json = JSON.parse(file);
    return json;
  };
  
  const setJson = (array, fileName) => {
    const json = JSON.stringify(array);
    fs.writeFileSync(`${__dirname}/../data/${fileName}.json`, json, 'utf-8');
  };
  
  const userController = {
    
    login: function (req, res) {
      res.render("users/login", { title: "login" });
    },
    processlogin: (req, res) => {
      const errors = validationResult(req);
    
      if (!errors.isEmpty()) {
        res.render("users/login", { errors: errors.mapped(), old: req.body });
      } else {
        
        
        
       
       
        res.redirect("/");
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
      const users = getJson('users');
      const idnew = Date.now();
  
      const { name, lastName, email, password } = req.body;
  
      const newUser = {
        id: +idnew,
        firstName: name.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(password, 10),
        type: 'USER',
        image: file ? file.filename : 'predeterminado.webp'
      };
  
      const newJson = [...users, newUser];
      setJson(newJson, 'users');
  
      res.redirect('/users/login');
  }, show:(req,res)=>{
      const { id } = req.params;
      const users = getJson();
      const user = users.find((element) => element.id == id);
      res.render("users/profile", { user })
  },

  edit:(req,res)=>{
    db.Usuario.findByPk(req.params.id)
    .then(function(usuario){
      console.log(usuario)
        res.render("users/userUpdate", {usuario:usuario})
    })

  },
  update:(req,res)=>{
    const errores = validationResult(req)
    db.Usuario.findByPk(req.params.id)
    //console.log("errores:", errores);
    .then (usuario => {
      if(!errores.isEmpty()){
     return res.render('users/userUpdate',{errores:errores.mapped(),old:req.body, usuario:usuario})
     } else {
      const body = req.body;
      console.log(body)
      console.log(usuario)

    db.Usuario.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        imagen: req.file ? req.file.filename : usuario.imagen
    },{
        where: {
            id_Usuario: req.params.id
        }
        
    });
    return usuario
    // res.redirect("users/profile")
      }    
    })}
    
}

  // update:(req, res)=>{
  //     const errores = validationResult(req);
  //     //console.log("errores:", errores);
  //     if(!errores.isEmpty()){
  //     const { id } = req.params;
  //     const users = getJson();
  //     const user = users.find((element) => element.id == id);
  //     return res.render('users/userUpdate',{errores:errores.mapped(),old:req.body, user})
  //     }

  //     const usersFilePath = path.join(__dirname, '../data/users.json');
  //     const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
  //         const {id} = req.params
  //         const {firstName, lastName, email, password, address, tel, postalCode, birthDate,dniNumber} = req.body;
  //         const nuevoArray = users.map(user => {
  //             if (user.id == id){
  //                 return{
  //                     id,
  //                     firstName: firstName.trim(),
  //                     lastName: lastName.trim(),
  //                     dniNumber,
  //                     // email: email.trim(),
  //                     password,
  //                     address: address.trim(),
  //                     tel,
  //                     postalCode,
  //                     birthDate: birthDate,
  //                     image: req.file ? req.file.filename : user.image,
  //                 }
  //             }
  //         })
  //         const json = JSON.stringify(nuevoArray);
  //         fs.writeFileSync(usersFilePath, json, "utf-8"); 
          
      
  // }
  

module.exports = userController;