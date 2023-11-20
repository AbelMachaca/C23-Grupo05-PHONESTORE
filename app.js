const express = require('express');
const app = express();
const path = require('path');



app.get("/productDetail", (req,res)=>{
 res.sendFile(path.join(__dirname, "/views/productDetail.html"))    
 
})


app.use(express.static("public"));
app.listen(3030,()=>console.log("Levantando un servidor 3030"))