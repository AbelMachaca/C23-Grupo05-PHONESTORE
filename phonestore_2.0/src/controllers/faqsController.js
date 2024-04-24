const path = require('path');

const faqsController={
questions:(req,res)=>{
    res.render('consultas', {title:'consultas', usuario: req.session.user,})
}
}
module.exports = faqsController