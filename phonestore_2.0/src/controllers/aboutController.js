const path = require('path');

const aboutController={
description:(req,res)=>{
    res.render('about', {title:'about'})
}
}
module.exports= aboutController