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
    //res.send("estamos llegando")
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
    //const files = req.file;
    const { name, description, category, color, price, image } = req.body;
    const products = getJson();
    const nuevoArray = products.map((product) => {
      if (product.id == id) {
        return {
          id:+id,
          name: name,
          description,
          category,
          color,
          price: +price,
          image: image ? image : product.image,
          //image:files ? files.filename : "default.jpg",
        };
      }
      return product;
    });
    const json = JSON.stringify(nuevoArray);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect(`/products/productDetail/${id}`);
  },

   /*store: (req, res) => {
    res.send(req.body)
    const files = req.file;
    const products = getJson();
    const { name, price, discount, category, description } = req.body;
    const id = products[products.length - 1].id + 1;

    const newProduct = {
      id: +id,
      name: name.trim(),
      price: +price,
      discount: +discount,
      category,
      description: description.trim(),
      image:files ? files.filename : "default.jpg", 
    }

    products.push(newProduct);

    const json = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, json, "utf-8");

    res.redirect(`/products`);
  },*/

  createForm: (req, res) => {
    res.render("products/productCreate_form");
  },

  dashboard: (req, res) => {
    const products = getJson();
    res.render("products/dashboard",{products});
  },
};
module.exports = productController;
