const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");
const usuario = require("../database/models/usuario");

const getJson = (fileName) => {
  const file = fs.readFileSync(
    `${__dirname}/../data/${fileName}.json`,
    "utf-8"
  );
  const json = JSON.parse(file);
  return json;
};

const setJson = (array, fileName) => {
  const json = JSON.stringify(array);
  fs.writeFileSync(`${__dirname}/../data/${fileName}.json`, json, "utf-8");
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
  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.user) {
      res.clearCookie("user");
      res.clearCookie("remember");
    }
    res.redirect("/");
  },
  formRegister: (req, res) => {
    res.render("users/register", { title: "Registro" });
  },
  register: (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.render("users/register", {
        errores: errores.mapped(),
        old: req.body,
      });
    }
    const file = req.file;
    const users = getJson("users");
    const idnew = Date.now();
    const { name, lastName, email, password } = req.body;
    const newUser = {
      id: +idnew,
      firstName: name.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: bcrypt.hashSync(password, 10),
      type: "USER",
      image: file ? file.filename : "predeterminado.webp",
    };

    const newJson = [...users, newUser];
    setJson(newJson, "users");

    res.redirect("/users/login");
  },
  show: (req, res) => {
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
        {where: { id_Usuario: id}}
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
