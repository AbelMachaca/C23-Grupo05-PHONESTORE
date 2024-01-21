const adminSessionValidate=(req,res,next)=>{
    if(req.session.user.rol == admin){
        next();
    }
    res.redirect("/login");
};

module.exports=adminSessionValidate;