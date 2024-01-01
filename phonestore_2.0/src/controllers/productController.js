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
    res.render("products/productEdit");
  },

  createForm: (req, res) => {
    res.render("products/productCreate_form");
  },

  store: (req, res) => {
		const {name,price,discount,category,description} = req.body;
		const products = getJson();
		if(!req.files){
			const error = new Error("Por favor seleccione un archivo");
			error.httpStatusCode = 400;
			return next(error)
		}
		const images = req.files.forEach(element => {
			element.filename
		});

		console.log(req.files);
		const newProduct = {
			id,
			name:name.trim(),
      description,
      category,
			price,
			discount,		
			description:description.trim(),
      color,
      price:description.trim(),
      image: image ? image : product.image,
		}
		products.push(newProduct);
		const json = JSON.stringify(products);
		fs.writeFileSync(productsFilePath,json,"utf-8");
		res.redirect(`/products/productDetail/${newProduct.id}`)
	},
 
  dashboard: (req, res) => {
    res.render("products/dashboard");
  },
};
module.exports = productController;
