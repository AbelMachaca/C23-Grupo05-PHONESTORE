const path = require('path');

const aboutController={
description:(req,res)=>{
    res.render('about', {title:'about', usuario: req.session.user,})
}
}
module.exports= aboutController