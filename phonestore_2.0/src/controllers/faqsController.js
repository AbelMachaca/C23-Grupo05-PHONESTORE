const path = require('path');

const faqsController={
questions:(req,res)=>{
    res.render('consultas', {title:'consultas'})
}
}
module.exports = faqsController