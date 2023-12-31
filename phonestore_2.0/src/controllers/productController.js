const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");

const getJson = () => {
  const productsFilePath = path.join(
    __dirname,
    "../data/products.json"
  );
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

  dashboard: (req, res) => {
    res.render("products/dashboard");
  },
};
module.exports = productController;
