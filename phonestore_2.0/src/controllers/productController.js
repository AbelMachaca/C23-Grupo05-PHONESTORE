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

  dashboard: (req, res) => {
    res.render("products/dashboard");
  },
};
module.exports = productController;
