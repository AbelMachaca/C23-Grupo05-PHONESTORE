const fs = require('fs');
const path = require('path');


const getJson= () =>{
	const productsFilePath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
return products;
}

const indexController = {
    
    index:(req,res)=>{
        console.log(req.session.user);
        const products = getJson();
        res.render("index", {title:"products", products,usuario:req.session.user});
    },  
}
module.exports = indexController;