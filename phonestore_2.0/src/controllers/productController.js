const productController = {
    cart:(req,res)=>{
        res.render("products/productCart", {title:"Carrito de compra"});
    },
    detail:(req,res) => {
        res.render("products/productDetail", {title: product.name, product})
    },
    
}

module.exports= productController;