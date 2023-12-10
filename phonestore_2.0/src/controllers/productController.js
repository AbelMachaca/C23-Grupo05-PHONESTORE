const productController = {
    cart:(req,res)=>{
        res.render("products/productCart");
    },
    detail:(req,res) => {
        res.render("products/productDetail");
    }, 
    createForm:(req,res) => {
        res.render("products/productCreate_form");
    }, 
}
module.exports= productController;