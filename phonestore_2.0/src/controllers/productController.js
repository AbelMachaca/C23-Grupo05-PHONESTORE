const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");
const Producto = require("../database/models/producto");

const getJson = () => {
  const productsFilePath = path.join(__dirname, "../data/products.json");
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  return products;
};

const productController = {
  cart: (req, res) => {
    res.render("products/productCart");
  },
  detail: (req, res) => {
    //res.send("estamos llegando")
    const { id } = req.params;
    const products = getJson();
    const product = products.find((product) => product.id == id);
    res.render("products/productDetail", { title: product.name, product });
  },

  edit: (req, res) => {
    const { id } = req.params;
    db.Producto.findByPk(id)
    .then((product) => {
      console.log(product);
      res.render("products/productEdit", { product});
    });
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { marca, modelo, precio, almacenamiento, ram, so, descripcion } = req.body;
      const product = await db.Producto.findByPk(id);
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }
      await product.update(req.body);
      res.redirect(`/products/dashboard`);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res
        .status(500)
        .send("Error interno del servidor al actualizar el producto");
    }
  },
  store: (req, res) => {
    const { name, category, price, description } = req.body;
    const products = getJson();

    if (!req.file) {
      const error = new Error("Por favor seleccione un archivo");
      error.httpStatusCode = 400;
      return res.status(400).send(error.message);
    }

    const image = req.file.filename;

    console.log(req.file);

    const newProduct = {
      id: uuidv4(),
      name: name.trim(),
      image: image,
      category,
      price: price.trim(),

      description: description.trim(),
    };

    products.push(newProduct);
    const json = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect("/");
  },

  createForm: (req, res) => {
    res.render("products/productCreate_form");
  },

  dashboard: (req, res) => {
    db.Producto.findAll()
    .then((products)=>{
        res.render("products/dashboard", { products });
    })
    .catch(error =>{console.log(error)})
  },
  destroy: (req, res) => {
    let { id } = req.params;
    console.log("metodo delete", id);
    const products = getJson();
    console.log(products);
    const newArray = products.filter((product) => product.id != id);
    console.log("newArray", newArray);
    const json = JSON.stringify(newArray);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect("/");
  },
};
module.exports = productController;
