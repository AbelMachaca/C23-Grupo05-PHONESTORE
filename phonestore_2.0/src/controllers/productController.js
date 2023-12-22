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
  products:(req,res) =>{
    const products = getJson("products.json");
    res.render("products/products", {title: "Todos los productos", products});
},
};
module.exports = productController;
