const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { v4: uuidv4 } = require("uuid");

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
    res.render("products/productDetail");
  },
  edit: (req, res) => {
    res.render("products/productEdit");
  },

  createForm: (req, res) => {
    res.render("products/productCreate_form");
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

  dashboard: (req, res) => {
    res.render("products/dashboard");
  },
};
module.exports = productController;
