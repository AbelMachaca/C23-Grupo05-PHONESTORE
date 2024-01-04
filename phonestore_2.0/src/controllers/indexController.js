const fs = require('fs');
const path = require('path');

const getJson= () =>{
	const productsFilePath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
return products;
}

const indexController = {
    
    index:(req,res)=>{
        const products = getJson();
        res.render("index", products);
    },  
}
module.exports = indexController;