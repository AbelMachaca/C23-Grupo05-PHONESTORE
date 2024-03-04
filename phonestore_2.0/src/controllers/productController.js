const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { v4: uuidv4 } = require("uuid");
const db = require('../database/models')
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
    


    let product = db.Producto.findByPk(req.params.id,{
      include: [{
          association: "imagenes_productos"},
       ],
    });
    Promise.all([product])
      .then(([product]) => {
           return res.render("products/productDetail",{
           product,
           usuario: req.session.user,
           title: product.modelo
       })
    })
      .catch(error=> console.log(error));

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
    const { modelo, descripcion, marca, color, precio, imagen_usuario } = req.body;
    const products = getJson();
    const nuevoArray = products.map((product) => {
      if (product.id == id) {
        return {
          id:+id,
          modelo: modelo,
          descripcion,
          marca,
          color,
          precio: +precio,
          imagen_usuario: files ? files[0].filename : product.imagen_usuario,
        };
      }
      return product;
    });
    const json = JSON.stringify(nuevoArray);
    fs.writeFileSync(productsFilePath, json, "utf-8");
    res.redirect(`/products/dashboard`);
  },

  store: (req, res) => {
    const { modelo, marca, precio, descripcion } = req.body;
    const products = getJson();

    if (!req.file) {
      const error = new Error("Por favor seleccione un archivo");
      error.httpStatusCode = 400;
      return res.status(400).send(error.message);
    }

    const imagen_usuario = req.file.filename;

    console.log(req.file);

    const newProduct = {
      id: uuidv4(),
      modelo: modelo.trim(),
      imagen_usuario: imagen_usuario,
      marca,
      precio: precio.trim(),

      descripcion: descripcion.trim(),
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
