const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");

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
    const { id } = req.params;
    const products = getJson();
    const product = products.find((product) => product.id == id);
    res.render("products/productEdit", { product });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, description, category, color, price, image } = req.body;
    const products = getJson();
    const nuevoArray = products.map((product) => {
      if (product.id == id) {
        return {
          id,
          name: name.trim(),
          description,
          category,
          color,
          price: description.trim(),
          image: image ? image : product.image,
        };
      }
      return product;
    });
    const json = JSON.stringify(nuevoArray);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect(`/products/detail/${id}`);
  },

  createForm: (req, res) => {
    res.render("products/productCreate_form");
  },

  dashboard: (req, res) => {
    res.render("products/dashboard");
  },
};
module.exports = productController;
