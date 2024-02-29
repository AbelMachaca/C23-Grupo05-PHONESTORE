const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { v4: uuidv4 } = require("uuid");
const db =require("../database/models")

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
    const {id} = req.params;
    const products = getJson()
    const product = products.find((product) => product.id == id);
    res.render("products/productDetail", { title: product.name, product});
    },
    
  edit: (req, res) => {
    const { id } = req.params;
    const products = getJson();
    const product = products.find((product) => product.id == id);
    res.render("products/productEdit", { product });
      
  },
  update: (req, res) => {
    const files = req.files;
    const { id } = req.params;
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
          image: files ? files[0].filename : product.image,
        };
      }
      return product;
    });
    const json = JSON.stringify(nuevoArray);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect(`/products/dashboard`);
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
    const products = getJson();
    res.render("products/dashboard",{products});
    res.redirect("/", {products});
  },
  destroy: (req,res) => {
    let {id}=req.params;
    console.log("metodo delete", id);
    const products=getJson();
    console.log(products);
    const newArray=products.filter(product => product.id != id);
    console.log("newArray", newArray);
    const json=JSON.stringify(newArray);
	        fs.writeFileSync(productsFilePath,json, 'utf-8');
	        res.redirect("/");
           
  }
}
module.exports = productController;
