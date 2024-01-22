const path = require('path');
const fs = require('fs');
const { validationResult } = require("express-validator");
const { log } = require('console');

const userController = {
  login: function (req, res) {
    res.render("users/login", { title: "login" });
  },
  processlogin: (req, res) => {
    const errors = validationResult(req);
    //console.log(errors);
    const { email } = req.body;
    const dir = path.join(__dirname, "../data/users.json");
    let products = JSON.parse(fs.readFileSync(dir, "utf-8"));
    const user = products.find((usuario) => usuario.email == email);
    if (user) {
      req.session.user = user;
      res.cookie("email", user.email, { maxAge: 1000 * 60 });
      //console.log("session:", req.session);
      res.redirect("/");
    } else {
      res.render("users/login", { errors: errors.mapped(), old: req.body });
    }
  },

  register: (req, res) => {
    res.render("users/register");
  },
};

module.exports = userController;
